export class HashManagerMocks {

   public hash = (password: string)=> {
      return "senha_Hasheada"
   }

   public compare = (password: string, hash: string)=> {
      return password === hash
   }
   
}