import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'

// -------------------STYLING ------------------------------
const Wrapper = styled.div `

display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: auto;
gap:2rem;
margin: 0 2rem 0 2rem;

`
const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
margin-top:2rem;

`
const Button = styled.button`

padding: 1rem;
transition: ease-in .2s;
color:white;
background:grey;
outline: none;
font-weight: bold;
border: solid 2px white;
margin:1rem;
border-radius: 25px;

&:hover{
  background: black;
  transition: .1s ease-in;
  cursor:pointer;
}

&: disabled{
  transition: ease-in .2s;
  background: white;
  color: grey;
  opacity: .6;
  cursor: default;
}

`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [chars, setChars] = useState([])
  const [page, setPage] = useState({})
  
  useEffect(()=>{

    axios.get(`https://swapi.dev/api/people`)

      .then( res => {
        setPage(res.data)
        setChars(res.data.results)
      } )

      .catch( err => console.log(err) )

  },[])

  const next = () => {
    axios.get(page.next)
      .then( res => {
        setPage(res.data)
        setChars(res.data.results)
      } )
  }

  const prev = () => {
    axios.get(page.previous)
      .then( res => {
        setPage(res.data)
        setChars(res.data.results)
      } )
  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Wrapper>
        {chars.map( item => <Character char={item} key={item.name}/>)}
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={prev} disabled={!page.previous}>Previous</Button>
        <Button onClick={next} disabled={!page.next}>Next</Button>
      </ButtonWrapper>
    </div>
  );
}

export default App;
