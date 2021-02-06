// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div`
    
    height: auto;
    background-color: rgba(113, 118, 152, 0.9);
    font-family: serif; 
    color: white;
    padding: 1rem;
    border-radius: 20px;
`

const Character = (props) =>{


   return(
       <StyledDiv>
           <div key={props.char.name}>
            <h2>{props.char.name}</h2>
            <h3>{props.char.gender}</h3>
            <h3>{props.char.height} cm</h3>
            <p>Appears in {props.char.films.length} movies</p>
            </div>
       </StyledDiv>
   ) 

}

export default Character