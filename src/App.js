import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'


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
color:white;
background:grey;
outline: none;
font-weight: bold;
border:none;
margin:1rem;
border-radius: 25px;

&:hover{
  background: black;
  transition: .3s ease-in-out;
  cursor:pointer;
}

`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.......Seeing if this next push will submit the project with codeGrade.


  const [chars, setChars]= useState([])
  const [page,setPage]=useState({})



  useEffect( ()=>{
    

    axios.get(`https://swapi.dev/api/people/`)
      .then(res=>{
        setChars(res.data.results)
        setPage(res.data)
      })
      .catch(err=>console.log(err))
    

  },[])


  const clickNext = () => {

    axios.get(page.next)
      .then(res=>{
        setChars(res.data.results)
        setPage(res.data)
      })
      .catch(error=>console.log(error))
  }

  const clickPrev = () => {
    axios.get(page.previous)
      .then(res=>{
        setChars(res.data.results)
        setPage(res.data)
      })
      .catch(error=>console.log(error))

  }

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Wrapper>
      {chars.map(item => <Character char={item} key={item.name}/>)}
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={clickPrev}>Previous</Button>
        <Button onClick={clickNext}>Next</Button>
      </ButtonWrapper>
    </div>
  );
}

export default App;
