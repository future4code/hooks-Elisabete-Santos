import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())


// Exercício 1
app.get('/', (req, res) => {
   res.send('Até aqui deu certo kkkk')
})


// Exercício 2
type User = {
   id: number | string,
   name: string,
   phone: string,
   email: string,
   website: string
}


// Exercício 3 
const listUsers: User[] =[
   {
      id: 1,
      name: "Agatha Christie",
      phone: "(11) 98658-4598",
      email: "agathachristie@gmail.com",
      website: "www.agathachristie.com.br"
   },
   {
      id: 2,
      name: "Ragnar Lothbrok",
      phone: "(21) 86395-8934",
      email: "ragnarlothbrok@april.com",
      website: "www.lothbrok.com.br"
   },
   {
      id: 3,
      name: "Morpheus Coleman",
      phone: "(19) 98658-4598",
      email: "morpheuscoleman@outlook.com",
      website: "www.morpheus.com.br"
   }

]


// Exercício 4
app.get('/users', (req, res) => {
   res.send(listUsers)
})


// Exercício 5    
type Post = {
   userId: number,
   id: number,
   title: string,
   body: string
}


// Exercício 6 
// Prefiro criar fora para não ter um array dentro de outro array
const listPosts: Post[] = [
   {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 2,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 3,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 3,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
]

// Exercício 7
app.get('/pots', (req, res) => {
   const allPosts = listPosts.map((post) => {
      return post
   })
   res.send(allPosts)
})


//Exercíco 8 
app.get('/posts/:userId', (req, res) => {
   const { userId } = req.params

   const postUser = listPosts.find((user) =>{
      return user.userId === parseInt(userId)
   })
   res.send(postUser)
})


// DESAFIOS

// Exercício 9
app.delete('/post/:id', (req, res) => {
   const { id } = req.params

   const deletePost = listPosts.find((post) =>{
      return post.id !== parseInt(id)
   })
   res.send(deletePost)
})


// Exercício 10 (não entendi muito bem esta questão)
app.delete('/post/:id', (req, res) => {
   const { id } = req.params

   const deleteUser = listUsers.find((user) =>{
      if (user.id === parseInt(id)) {
         return {
           ...user,
           deleteUser: {}
         }
       }
       return user
   })
   res.send(deleteUser)
})

// app.delete("/users/:id", (req, res) => {      
  
//    const id = req.params.id;
 
//    const deleteUser = listUsers.filter((user) => {
//      return user.id !== parseInt(id)
//    })
//    res.send(deleteUser)
//  })

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003 ;)')
})