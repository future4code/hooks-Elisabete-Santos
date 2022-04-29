import React from "react";
import styled from "styled-components";

import { handleChat } from "../js/chat";

import iconButton from "../img/paper-plane.png";

const Footer = styled.div`
  background-color: #3d3f3f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  box-shadow: 0 1px 10px #203242;
  grid-row: 3/4;
  border-radius: 1px 1px 4px 4px;


  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    min-width: 50%;
    margin-top: 6px;
  }

  input {
    height: 35px;
    border-radius: 15px;
    text-align: center;
    border: none;
    outline: none;
  }

  .area-de-mensagem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    width: 75%;
    border-radius: 15px;
    min-width: 300px;
    
  }
  #mensagem {
    width: 90%;
  }
  #nome {
    border-radius: 15px;
    width: 20%;
  }

  button {
    width: 50px;
    height: 35px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #26d3d3;
    border-radius: 10px 15px 15px 10px;

    img {
      width: 25px;
      height: 25px;
    }

    &:hover {
      background-color: #0d9b9b;
      transition: all 0.2s;
    }
    
    &:not(:hover) {
      transition: all 0.2s;
    }
  }

  @media screen and (max-width: 589px){
      padding-left:0;
      padding-right:0;
      
      form {
        justify-content: center;
      }

      #nome{
        width: 90%;
        margin-bottom: 10px;
      }
      
      .area-de-mensagem{
        width: 90%;
      }
  }

`;

export default function FooterComponent(props) {

  let name = props.name
  let message = props.message
  let key = Number(props.keyProp)

  return <Footer id='footer'>
    <form autoComplete="off">
            <input
              id="nome"
              type="text"
              placeholder="Nome"
              autoComplete="off"
              value={name}
              onChange={(e) => {
                e.preventDefault();
                props.updateName(e.target.value);
              }}
            />
            <div className="area-de-mensagem">
              <input
                id="mensagem"
                autoComplete="off"
                type="text"
                placeholder="              Digite aqui..."
                value={message}
                onChange={(e) => {
                  e.preventDefault();
                  props.updateMessage(e.target.value);
                }}
              />
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  if (message === "" || name === "") {
                    alert("Os campos não podem estar vazios, por favor preencha-os");
                  } else {
                    props.incrementKey();
                    handleChat(name, message, key);
                    props.updateMessage("");
                    console.log(key);
                  }
                }}
              >
                <img src={iconButton} alt="enviar" />
              </button>
            </div>
          </form>
  </Footer>;
}
