// Write your Character component here

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const CardTheme = styled.div`
width: 80%
height: auto;
background-color: gray;
color: white;
padding: 1rem;
border-radius: 20px;
`


function Character (props){

    


    return(
        
        
        <CardTheme>
            <h2>{props.data.name}</h2>
            <h3>{props.data.gender}</h3>
            <h3>{props.data.height} cm</h3>
            <p>Appears in {props.data.films.length} movies</p>
        </CardTheme>  
         
        
    )


    



    
}

export default Character
