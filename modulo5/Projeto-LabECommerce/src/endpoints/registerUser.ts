import { Request, Response } from "express"
import { connection } from "../data/connection"
import { v4 as generateID } from "uuid";
import transporter from "../services/mailTransporter";

export const registerUser = async (req: Request, res: Response) => {
   let statusCode = 500
   try {
     const { name, email, password } = req.body;
      if (!name || !email || !password) {
         statusCode = 400
         throw new Error("Body of the request must contain name, email and password.");
      }

      await connection("labecommerce_user").insert({
        id: generateID(),
        name: name,
        email: email,
        password: password,
      });

      if (email === email.body) {
         statusCode = 400
         throw new Error("This email has already been registered")
      }
   
      const send = await transporter.sendMail({
         from: process.env.NODEMAILER_USER,
         to: email,
         subject: "Criação da conta!",
         text: "Parabéns, conta criada com sucesso",
         html: `<p>Parabéns ${name}, sua conta foi criada com sucesso ❤️</p>`
      })
    
      res.status(201).send("User created successfully.");
   } catch (error) {
      res.status(statusCode).send({ message: error.message })
   }
}