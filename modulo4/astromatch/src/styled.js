import styled from "styled-components";

export const MainContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin-top: 50px;
 `

export const DivContainer = styled.div`
	border: solid 2.3px black;
	border-radius: 10px;
	width: 350px;
	padding: 10px 30px;
	background-color: white;

	@media(max-width:500px){
		border: none;
	}
`