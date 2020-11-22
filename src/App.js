import React,{ useState, useEffect }from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [swData, setSWData] = useState([])
  const [swData2, setSWData2] = useState([])
  const [swData3, setSWData3] = useState([])
  const [swData4, setSWData4] = useState([])
  const [swData5, setSWData5] = useState([])
  const [swData6, setSWData6] = useState([])
  const [swData7, setSWData7] = useState([])
  const [swData8, setSWData8] = useState([])
  const [swData9, setSWData9] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  
useEffect(()=>{


      axios.get('https://swapi.dev/api/people/')
       .then( res => setSWData(res.data.results) )
       .catch( err => console.log('error message bro') )


      axios.get(`https://swapi.py4e.com/api/people/?page=2`)
        .then( res =>  setSWData2(res.data.results))
        .catch( err => console.log('error message bro') )

        axios.get(`https://swapi.py4e.com/api/people/?page=3`)
        .then( res =>  setSWData3(res.data.results))
        .catch( err => console.log('error message bro') )

        axios.get(`https://swapi.py4e.com/api/people/?page=4`)
        .then( res =>  setSWData4(res.data.results))
        .catch( err => console.log('error message bro') )
        
        axios.get(`https://swapi.py4e.com/api/people/?page=5`)
        .then( res =>  setSWData5(res.data.results))
        .catch( err => console.log('error message bro') )

        axios.get(`https://swapi.py4e.com/api/people/?page=6`)
        .then( res =>  setSWData6(res.data.results))
        .catch( err => console.log('error message bro') )

        axios.get(`https://swapi.py4e.com/api/people/?page=7`)
        .then( res =>  setSWData7(res.data.results))
        .catch( err => console.log('error message bro') )

        axios.get(`https://swapi.py4e.com/api/people/?page=8`)
        .then( res =>  setSWData8(res.data.results))
        .catch( err => console.log('error message bro') )

        axios.get(`https://swapi.py4e.com/api/people/?page=9`)
        .then( res =>  setSWData9(res.data.results))
        .catch( err => console.log('error message bro') )


      
 
  
  

},[])



  
//console.log(swData)



const ContainerDiv= styled.div`

display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
gird-template-rows:auto;
grid-gap:1rem;
margin:1rem


`

//console.log(swData[0])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

  <ContainerDiv>
  {swData.map(item=><Character data={item}/>)}
  {swData2.map(item=><Character data={item}/>)}
  {swData3.map(item=><Character data={item}/>)}
  {swData4.map(item=><Character data={item}/>)}
  {swData5.map(item=><Character data={item}/>)}
  {swData6.map(item=><Character data={item}/>)}
  {swData7.map(item=><Character data={item}/>)}
  {swData8.map(item=><Character data={item}/>)}
  {swData9.map(item=><Character data={item}/>)}
  
  </ContainerDiv>

    </div>
  );
}

export default App;
