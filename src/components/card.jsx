import React from 'react'
import '../App.css'

export default function Card(props) {
  
      let  saludar = "Hola";
     
      if(props.clients.country === 'de'){
            saludar ='Hay'
      }else if(
         props.clients.country === 'fr' )
     {
        saludar ='Hou'
      }
      else if(
        props.clients.country === 'en' )
    {
       saludar ='Hello'       
     }    
  return (
    <div className='card'>
        <h1>            
            {props.clients.name}<br/>{saludar}
           <br/>
            {props.clients.age}
            {props.clients.country}              
        </h1>
    </div>
  )
}
