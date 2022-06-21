import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/Base_url"
import { useProtectedPage } from "../../hooks/useRequestData"
import { logout, goBack } from "../../routes/Coordinator"
import { Header } from '../../components/Header/Header'
import { Lista, CardViagem } from "./styled"

const TripDetailsPage = () => {

   useProtectedPage();
   const token = localStorage.getItem("token");
   const HEADERS = {
      headers: {
         auth: token,
      },
   }

   const { id } = useParams();
   const [detailsTrip, setDetailsTrip] = useState('')
   const [update, setUpdate] = React.useState(false)

   useEffect(() => {

      axios.get(`${BASE_URL}/trip/${id}`, HEADERS)
         .then((response) => {
            setDetailsTrip(response.data)
            setUpdate(!update)
         })
         .catch((error) => {
            alert(error.response)
         })
   }, [update])




   return (
      <div>
         <Header
            first={{ function: goBack, text: "Voltar" }}
            second={{ function: logout, text: "Sair" }}
         />
         <Lista>
            {detailsTrip && (
               <CardViagem>
                  <p>Nome: {detailsTrip.trip.name}</p>
                  <p>Planeta: {detailsTrip.trip.planet}</p>
                  <p>Descrição: {detailsTrip.trip.description}</p>
                  <p> Data: {detailsTrip.trip.date}</p>
                  <p> Duração: {detailsTrip.trip.durationInDays}</p>
               </CardViagem>
            )}
         </Lista>

      </div>
   )
}

export default TripDetailsPage