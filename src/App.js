import React,{ useState, useEffect }from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [swData, setSWData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(()=>{

  const allChars = []

  axios.get('https://swapi.dev/api/people/')
      .then( res => {

        console.log(res.data.results)
            //setSWData(res.data.results)
            setSWData(res.data.results)
          } 
        )

      .catch( err => console.log('error message bro') )
  
  

},[])


const ContainerDiv= styled.div`

display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gird-template-rows:auto;
grid-gap:10px;
margin:10px


`

console.log(swData[0])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

  <ContainerDiv>
  {swData.map(item=><Character data={item}/>)}
  </ContainerDiv>

    </div>
  );
}

export default App;
