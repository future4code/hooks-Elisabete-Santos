import React from "react"
import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../../routes/coordinator"
import { HeaderContainer } from "./styled"
import logo from "../../assets/logo.png"

const Header = () => {

  const navigate = useNavigate()

  return(
    <HeaderContainer>
      <h2 onClick={() => goToHomePage(navigate)}><img src={logo} alt="logo com as letras T M D B" /></h2>
    </HeaderContainer>
  )
}

export default Header