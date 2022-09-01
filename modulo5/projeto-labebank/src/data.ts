export enum Extract {
   DEBITO = "Débito",
   DEPOSITO = "Deposito",
}

// Crie mais um tipo: para representar as transações que serão salvas no extrato
export type Transaction = {
   value: number,
   date: string,
   description:  Extract.DEBITO | Extract.DEPOSITO
}

//Crie um tipo para representar uma conta para o usuário
export type User = {
   id: number,
   name: string,
   cpf: string,
   birthDate: Date | number | string,
   balance:number,
   statement: Transaction[]
}

//Crie um array global que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.
export let users: User[] = [
   {
      id: 1,
      name: "Gabriela Correia",
      cpf: "599.956.600-24",
      birthDate: "09/10/1989",
      balance: 15000,
      statement: [
         {
            value: 10000,
            date: "22-12-2021",
            description: Extract.DEBITO
        },
        {
            value: 5000,
            date: "15-01-2022",
            description: Extract.DEPOSITO
        }
      ]
   },
   {
      id: 2,
      name: "Bruno Henrique",
      cpf: "166.959.730-08",
      birthDate: "24/11/1999",
      balance: 50000,
      statement: [
         {
            value: 20000,
            date: "22-03-2020",
            description: Extract.DEPOSITO
         },
        {
            value: 5000,
            date: "15-06-2021",
            description: Extract.DEPOSITO
        },
        {
            value: 10000,
            date: "05-12-2021",
            description: Extract.DEPOSITO
         },
         {
            value: 15000,
            date: "15-06-2022",
            description: Extract.DEBITO
         }
      ]
   },
   {
      id: 3,
      name: "Ana Texeira",
      cpf: "880.381.060-91",
      birthDate: "07/5/1993",
      balance: 5000,
      statement: [
         {
            value: 5000,
            date: "08-03-2022",
            description: Extract.DEPOSITO
         }
      ]
   },
   {
      id: 4,
      name: "Diego Prado",
      cpf: "770.325.420-77",
      birthDate: "28/12/1987",
      balance: 10000,
      statement: [
         {
            value: 8000,
            date: "02-01-2021",
            description: Extract.DEPOSITO
        },
        {
            value: 2000,
            date: "19-04-2022",
            description: Extract.DEPOSITO
        }
      ]
   },
   {
      id: 5,
      name: "Vitoria Santos",
      cpf: "075.357.920-06",
      birthDate: "01/11/1967",
      balance: 3000,
      statement: [
         {
            value: 5000,
            date: "08-03-2022",
            description: Extract.DEPOSITO
         }
      ]
   },
 ]