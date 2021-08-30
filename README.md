# Componente, Function Component

function App() {
  return (
    <div id="AppPrincipal">
      <h1>Function Component</h1>
      <Identificacao1 />
    </div>
  );
}




# Componente, Arrow Function
const App = () => {
return(
  <div className="AppPrincipal">
  <h1>Arrow Function</h1>
  <Identificacao1 />
</div>
);
}




# Componente, Class Component
class App extends React.Component{
render(){
return(
<div className="AppPrincipal">
  <h1>Class Component</h1>
  <Identificacao1 />
</div>
)
}
}





# Extrutura para montar sua tela
// Importando o react
import React from 'react'

//Aqui você escolhe qual dos 3 componentes acima você deseja usar, no caso vou utilizar este
 
const App = () => {   // Nome do componente é App
return(
  <div id="AppPrincipal">  
  //Aqui dentro vai conter o html, mas para isso funcionar você não pode esquecer de importa o react, igual citei, aqui em cima, na extrutura para montar sua tela
  <h1>Arrow Function</h1>
  <Identificacao1 />
</div>
);
}

Exportar componente, sempre tem que exportar para fora, para você pegar ele de voltar depois, tudo o que esta dentro desta tela

export default App;   // exportando o componente, quem é ele, é o nome App aonde demos o nome.





# Para estilizar o css dentro de seu projeto você, pode usar o metodo comum.

Criando um arquivo, exemplo.css, depois importando este arquivo para que ele possa funcionar
---------------------------------------------------------------------------------------------
# Para estilizar o css dentro de um aquivo, javascript.
//Comando para instalar styled-components/
//yarn add styled-components
depois, você deve importar, igual esta linha.
----------------------------------------------------------------------------------------------
// Para react.native import (Exemplo)
// import styled, { css } from 'styled-components/native';

//Para react.native export (Exemplo)
//export const Container = styled.Text`
-----------------------------------------------------------------------------------------------
//Para react.js
import styled, { css } from 'styled-components';

// Para, React.js (Exemplo)
export const Container = styled.div`
text-align: center;
background-color: yellow;
`;

# Instação Bootstrap (Para ficar mais bonito o estilo)
yarn add bootstrap
Fonte ficou muito mais linda com o Bootstrap

# Instação Reactstrap (Para ficar mais bonito o estilo)
yarn add reactstrap

# Site para utilizar os componentes
https://reactstrap.github.io/

# roteador para trabalhar com as rotas
yarn add react-router-dom









