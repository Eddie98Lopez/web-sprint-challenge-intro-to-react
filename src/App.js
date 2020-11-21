import React,{ useState, useEffect }from 'react';
import axios from 'axios'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [swData, setSWData] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(()=>{

  axios.get('https://swapi.dev/api/people/')
      .then( res => {

            res.data.results.forEach(item => {
              swData.push(item)
            })

        } 
        )

      .catch( err => console.log('error message bro') )

  for(let i=2; i<=9 ; i++){

        axios.get(`https://swapi.dev/api/people/?page=${i}`)
          .then(res => {

                res.data.results.forEach(item => {

                  swData.push(item)
                  
                });
                
          } )
          .catch(err => console.log('error message man') )

      }
  
  console.log(swData)

},[])




  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
