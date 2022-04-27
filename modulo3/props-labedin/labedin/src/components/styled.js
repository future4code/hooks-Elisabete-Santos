import styled from 'styled-components'

export const CardGrandeContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

    img {
    width: 70px;
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 50%;
   } 
   
   h4 {
    margin-bottom: 2px;
   } 

   h8 {
    margin-top: 2px;
    margin-bottom: 2px;
    font-weight: bold;
   }

   div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}
`
export const CardPequenoContainer = styled.div`
   display: flex;
   align-items: center;
   border: 1px solid black;
   padding: 20px 10px;
   margin-bottom: 10px;
   height: 70px;

   img {
   width: 30px;
   margin-right: 20px;
   margin-left: 20px;
   border-radius: 50%;
   }

   h4 {
   margin-top: 15px;
   }

   p {
   margin-bottom: 15px;
   font-weight: bold;
   }

   div {
   display: flex;
   flex-direction: column;
   justify-items: flex-start;
   }
`

export const ImagemButtonContainer = styled.div`
   display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 40px;
    margin: 20px auto 0 auto;

    img {
    width: 30px;
    margin-right: 10px;
   }
`