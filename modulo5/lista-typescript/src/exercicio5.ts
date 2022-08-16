// Exercício 5
    
// Considerando o `array` de usuários abaixo, crie uma função que receba este `array` como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”.

//  [
//    {name: "Rogério", email: "roger@email.com", role: "user"},
//    {name: "Ademir", email: "ademir@email.com", role: "admin"},
//    {name: "Aline", email: "aline@email.com", role: "user"},
//    {name: "Jéssica", email: "jessica@email.com", role: "user"},  
//    {name: "Adilson", email: "adilson@email.com", role: "user"},  
//    {name: "Carina", email: "carina@email.com", role: "admin"}      
// ] 

enum ROLE {
   USER = "user",
   ADMIN = "admin"
}
 
type Usuarios = {
   name: string,
   email: string,
   role: string
}
 
const listaDeUsuarios = [
   {name: "Rogério", email: "roger@email.com", role: ROLE.USER},
   {name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
   {name: "Aline", email: "aline@email.com", role: ROLE.USER},
   {name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
   {name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
   {name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]
 
const retornaAdmin = (infos: Usuarios[]): string[] => {
   const listaDeAdmin: string[] = []
 
   infos.map((info: Usuarios) => {
     if(info.role === ROLE.ADMIN) {
       listaDeAdmin.push(info.email)
     }
   })
 
   return listaDeAdmin
}
 
console.log(retornaAdmin(listaDeUsuarios))