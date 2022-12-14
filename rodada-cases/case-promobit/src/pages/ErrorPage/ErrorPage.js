import React from 'react'
import { ErrorPageContainer, ErrorImage } from './styled'
import errorPage from '../../assets/errorPage.png'
import { Button } from "@material-ui/core"
import { goToHomePage } from '../../routes/coordinator'
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
   const navigate = useNavigate()
   return (
      <ErrorPageContainer>
         <ErrorImage src={errorPage} />
         <Button
            sx={{
               color: '#000000'
            }}
            onClick={() => goToHomePage(navigate)}> Voltar
         </Button>
      </ErrorPageContainer>
   )
}

export default ErrorPage