import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://avatars.githubusercontent.com/u/79269477?v=4"
          nome="Elisabete Alves"
          descricao="Oi, sou Eli 😊
          Profissional graduanda em Análise e Desenvolvimento de Sistemas, onde estou aprimorando e expandindo meus conhecimentos, visando sempre uma boa qualificação profissional, participei o Bootcamp da { reprograma } em Back end, curso Fullstack na Labenu e tenho como stack o desenvolvimento para aplicação web."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/44/44698.png"
          texto="Ver mais"
        />
      </div>


      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1650647722~hmac=52a343331c98303f155c2e7e3d020bd8"
          email="lizzbeth.lizz.iaz@gmail.com"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png"
          endereco="Rio Doce, Olinda/PE"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/733/733609.png"
          email="https://github.com/elisabetealves"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1496326817/adaflj3xa6ne5shlpc6g.png"
          nome="NTT DATA Europe e LATAM"
          data="2021 - atualmente"
          descricao="Analista de testes Software | Quality Assurance | QA"
        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQGmfhmwfPLrPA/company-logo_200_200/0/1625178813772?e=2147483647&v=beta&t=z3JnoOe-xhE57ebfZQca1b62S4I0uuGu5ahS6jLqfhw"
          nome="Morada tecnologia e serviços imbilíarios"
          data="2021 - 2022"
          descricao="Desenvolveror(a) Back-end Jr"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
