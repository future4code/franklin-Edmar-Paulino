import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/76621784?v=4" 
          nome="Edmar" 
          descricao="Oi, eu sou o Edmar. Sou da terra do pão de queijo. Adoro pets, tecnologia e assistir animes 💙"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/608/premium/608258.png?token=exp=1653576839~hmac=e2774ef0038b58cd80760eace41549a8" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239295.png?w=826"
          nome="Email"
          info="edmar@email.com.br"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png?w=826"
          nome="Endereço"
          info="Rua dos Bobos nº 0 Jardim 30 de Fevereiro"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://scontent.fpoo5-1.fna.fbcdn.net/v/t1.6435-9/45416242_2223406121229738_5298895229762404352_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=zw71ADDLVK4AX-MIsND&_nc_ht=scontent.fpoo5-1.fna&oh=00_AT9BR8D0d3yR3opVCwZExcZhDA4wYjAAO9RBw3KCiqFHYQ&oe=62B6DEB6" 
          nome="Grupo Boticário" 
          descricao="Desenvolvedor FullStack" 
        />

        <CardGrande 
          imagem="https://cdn-icons.flaticon.com/png/512/1518/premium/1518388.png?token=exp=1653580002~hmac=10d7771b4d3f25133e5646b3322e95ed" 
          nome="Escritório de Contabilidade Parisi" 
          descricao="Auxiliar de Escritório" 
        />

        <CardGrande 
          imagem="https://cdn-icons.flaticon.com/png/512/1518/premium/1518388.png?token=exp=1653580002~hmac=10d7771b4d3f25133e5646b3322e95ed" 
          nome="Líder Contabilidade Rural e Comercial" 
          descricao="Auxiliar de Escritório" 
        />
      </div>

      <div className="page-section-container">
        <h2>Educação</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante FullStack" 
        />

        <CardGrande 
          imagem="https://scontent.fpoo5-1.fna.fbcdn.net/v/t1.6435-9/64234389_334335330578363_4204183051846025216_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=01b7Kt53zU8AX-oWW1Y&_nc_ht=scontent.fpoo5-1.fna&oh=00_AT-h9y9XzcVMBe6BKEMQJGQlzKy-IMIpsC47vK6HxWvmDw&oe=62B58032" 
          nome="42 São Paulo" 
          descricao="Estudante de Engenharia de Software" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" 
          texto="Instagram" 
        />        

        <ImagemButton 
          imagem="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1653580162~hmac=5faaed28eddb294227f150579183e431" 
          texto="LinkedIn" 
        />        
      </div>
    </div>
  );
}

export default App;
