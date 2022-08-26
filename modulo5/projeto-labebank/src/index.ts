import express from 'express'
import cors from 'cors'
import { Transaction, User, users, Extract } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

//Crie um método GET na entidade users função que será responsável por pegar todos os usuários existentes no array de usuários.
app.get("/allusers", (req, res) => {
   res.status(200).send(users)
})



//Crie um endpoint  que utilize o método POST da entidade users que será responsável por cadastrar um usuário em um array de usuários. Neste momento, não se preocupe, com as validações descritas nas funcionalidades.
app.post("/users", (req, res) => {
   let statusCode: number = 500
   try {
     const { name, cpf, birthDate } = req.body
 
     const checkAge = (birth: string): void => {
       const currentDate = new Date()
       const [day, month, year] = birth.split("/")
       let age = currentDate.getFullYear() - Number(year)

       //verificar se o Mês e o dia já passou
       if( (currentDate.getMonth() + 1) < Number(month)||
           (currentDate.getMonth() + 1 === Number(month)&&
            currentDate.getDate() < Number(day)))
         { age-- }
 
       if(age < 18) {
         statusCode = 422
         throw new Error("User must be over 18 years old to open an account.")
       }
     }
 
     checkAge(birthDate)
 
     //verifica se o CPF passado já não está atrelado a alguma conta existente
     const userIndex = users.findIndex(user => user.cpf === cpf)
 
     if(userIndex < 0) {
       const newUser: User= {
         id: (users.length + 1),
         name,
         cpf,
         birthDate,
         balance: 0,
         statement: []
       }
   
       users.push(newUser)
       res.status(201).send("Account created successfully")

     } else {
       statusCode = 409
       throw new Error("CPF already registered.")
     }
 
   } catch (error) {
     res.status(statusCode).send({ message: error.message })
   }
})
 


//Crie um endpoint get que receba um CPF como parâmetro e retorne o saldo da conta do usuário dono daquele CPF. A informação deve ser igual ao que estiver salvo no sistema. Se for diferente, exiba uma mensagem de erro.
app.get("/users/:cpf", (req,res) => {
   let statusCode: number = 500
   try {
     const cpf: string = req.params.cpf

     if (!cpf || cpf !== req.params.cpf) {
      statusCode = 422
      throw new Error("CPF Invalid.")
    }
 
     const userIndex = users.findIndex(user => user.cpf === cpf)
     
     if(userIndex < 0) {
       statusCode = 404
       throw new Error("User not found. Invalid CPF.")
     } 
     else {
       res.status(200).send({balance: users[userIndex].balance})
     }
 
   } catch (error) {
     res.status(statusCode).send({ message: error.message })
   }
})



//Altere o endpoint de adicionar saldo para que ela adicione um item ao extrato da conta do usuário: indicando o valor e a data da transação. A descrição para este tipo de item deve ser sempre a mesma ("Depósito de dinheiro"). A data pode ser salva como timestamp ou string.
app.put("/users", (req,res) => {
   let statusCode: number = 500
   try {
     const {name, cpf, value} = req.body
 
     if(typeof value !== "number") {
      statusCode = 422
      throw new Error("Value is not a number.")
     }
 
     const userIndex = users.findIndex(user => user.cpf === cpf && user.name === name)
     
     if(userIndex < 0) {
      statusCode = 404
      throw new Error("User not found. Invalid name or CPF.")
     } 
     else {
      const currentDate = new Date()
      const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`
      const newBalance: number = users[userIndex].balance + value
      
      const newTransaction: Transaction = {
         value,
         date,
         description: Extract.DEPOSITO
      }
       
      users[userIndex].balance = newBalance
      users[userIndex].statement.push(newTransaction)
 
      res.status(200).send({message: "Transaction completed"})
     }
 
   } catch (error: any) {
     res.status(statusCode).send({ message: error.message })
     
   }
})


// Pagar uma conta
app.post('/user/:cpf', (req, res) => {
   let statusCode = 500

   const dataActually=(data:Date)=>{
      let dia  = data.getDate().toString();
      let diaF = (dia.length == 1) ? '0'+dia : dia
      let mes  = (data.getMonth()+1).toString() //+1 pois no getMonth Janeiro começa com zero.
      let mesF = (mes.length == 1) ? '0'+mes : mes
      let anoF = data.getFullYear();
      return diaF+"/"+mesF+"/"+anoF;
   }

   try {
      let {value, date, description}= req.body
	   const cpf=req.params.cpf
	   const user=users.find(user=>user.cpf===cpf)
	   if (!date) {
		   let newData=new Date()
		   let date=dataActually(newData)
		   user?.statement.push({value, date, description})
	   }
	   if (!user) {
         statusCode = 404
		   throw new Error('User cannot be found!');
      }
      
   } catch (error) {
      res.status(statusCode).send({ message: error.message })
   }
})

app.listen(3003, () => {
   console.log('Server is running in port 3003')
})