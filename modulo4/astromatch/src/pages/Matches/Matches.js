import axios from "axios";
import React, { useState, useEffect } from "react";
import { Clear } from "../../components/Clear/Clear";
import { Base_url } from "../../constants/Url";
import { ListaMatches, Button } from './styled'

const Matchs = () => {
   const [matches, setMatches] = useState("");

   useEffect(() => {
      getMatches();
   }, [matches]);


   const getMatches = async () => {
      await axios
         .get(`${Base_url}/matches`)
         .then((res) => {
            setMatches(res.data.matches);

         })
         .catch((err) => {
            alert("Ocorreu um erro, tente novamente");
         });
   }


   return (
      <div>
         <ListaMatches >
            {matches && matches.map((match) => {
               return (
                  <ul>
                     <li key={match.id}>
                        <img src={match.photo} alt="" />
                        {match.name}
                     </li>
                  </ul>
               );
            })}
         </ListaMatches>
         <Button>
            <button onClick={Clear}>Resetar Matches</button>
         </Button>
      </div>
   );
};

export default Matchs;