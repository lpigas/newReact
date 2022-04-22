import React, { useEffect, useState } from 'react'
    export default function getDatas(){
      const [drinks,setDrinks] = useState([]);
      const getData = async () =>{
        const response =await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
        const data = await response.json();
        setDrinks(data.drinks)
      }

      useEffect(() =>{
        getData()
      },[])
      
      useEffect(() =>{
        
        
    },[drinks])

     return (
      <div style={{
        margin:'auto',
        display:'block',
        color:'#fff',
        }}>
         {drinks.map(item =>
           <div key={item.idDrink}tyle={{
            margin:'auto',
            display:'flexbox'
            }}>
           <div >{item.strAlcoholic}</div> 
           <div >{item.idDrink}</div> 
         </div>
         )}
      </div> )
      
    }