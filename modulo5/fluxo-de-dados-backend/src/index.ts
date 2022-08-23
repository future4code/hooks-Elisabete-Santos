import express from 'express'
import cors from 'cors'
import {v4 as generateId} from 'uuid'
import {listProduct} from './data'

const app = express()

app.use(express.json())
app.use(cors())


// Exercício 1
app.get('/test', (req, res) => {
   res.send('A API está ok')
})


// Exercício 3 e 7
app.post('/createProduct', (req, res) => {
   let statusCode: number = 500
   try {
      const { name, price} = req.body

       // erro caso um ou nenhum (name e price) forem recebidos
      if (!name || !price) {
         statusCode = 422
         throw new Error("É necessário informar nome e preço")
      }

      // erro caso name seja diferente de string
      if (typeof name !== "string") {
         statusCode = 422
         throw new Error("O nome não é uma string")
      }

       // erro caso price seja diferente de number
      if (typeof price !== "number") {
         statusCode = 422
         throw new Error("O preço não é um number")
      }

      //erro caso price seja igual ou menor que 0
      if (price <= 0) {
         statusCode = 422
         throw new Error("O preço não pode ser menor ou igual a 0")
      }

      const newProduct = {
         id: generateId(),
         name,
         price
      }

      listProduct.push(newProduct)
      res.status(201).send(listProduct)

   } catch (error) {
      res.status(statusCode).send(error.message)
   }
})

app.get('/allProducts', (req, res) => {
   res.status(200).send(listProduct)
})



// Exercício 5 e 8
app.put('/editProduct/:id', (req, res) => {
   let statusCode = 500

   try {
      const id:string = req.params.id
      const newPrice:number = Number(req.body.price)

        //erro caso price não seja recebido
      if (!newPrice) {
         let statusCode = 422
         throw new Error("O preço não foi definido")
      }

       //erro caso `price` seja diferente de `number`
      if (typeof newPrice !== "number") {
         let statusCode = 422
         throw new Error("O preço não é um number")
      }

      //erro caso `price` seja igual ou menor que `0`
      if (newPrice <= 0) {
         let statusCode = 422
         throw new Error("O preço não pode ser menor ou igual a 0")
      }

      const editProduct = listProduct.find((product) => {

         if (product.id === id)
             return product.price = newPrice
     })
     
      //erro caso o produto a ser editado não seja encontrado
     if (!editProduct) {
         throw new Error("Produto não encontrado!")
     }

     res.status(200).send(editProduct) 

   } catch (error) {
      res.status(statusCode).send(error.message)
   }
})


// Exercício 6 e 9 
app.delete('/deleteProduct/:id', (req, res) => {
   let statusCode = 500
   try {
      const id: string = req.params.id
  
      for (let i = 0; i < listProduct.length; i++) {
  
        if (listProduct[i].id === id) {
         listProduct.splice(i, 1)
        }
  
        // erro caso o produto escolhido não seja encontrado
        else {
         statusCode = 400
          throw new Error("Id do produto não foi encontrado")
        }
      }
  
      res.status(200).send(listProduct)
  
    } catch (error) {
      res.status(statusCode).send(error.message)
    }
   
})

app.listen(3003, ()=>{
   console.log('Server is running on port 3003')
})


// let statusCode = 500

   // try {
   //    const idProduct = req.params.id
      
   //    if (!idProduct) {
   //       statusCode = 400
   //       throw new Error("Id invalido.")
   //    }

   //    const products = listProduct.filter((product) => {
   //       return idProduct !== product.id
   //   })

   //   if (!products) {
   //       statusCode = 400
   //       throw new Error("Erro! Sem produtos.")
   //   }

   //   res.status(200).send(products)

   // } catch (error) {
   //    res.status(statusCode).send(error.message)
   // }