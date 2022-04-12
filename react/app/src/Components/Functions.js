import React, { useEffect, useState } from 'react'
const styles = {
  // display:'flex',
  border:'3px solid black',
  color:'white',
  margin: '15px',
  justifyContent: 'center',
  width:'175%'
  
}
export default function Functions() {
    const [drinks,setDrinks] = useState([]);
    const [isLoaded, setIsLoading] = useState(false)
    const [test, setTest] = useState(false)
    const [items, setItems] = useState(1)
    const getData = async () =>{
        setIsLoading(true);
        const response =await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        const data = await response.json();
        setDrinks(data.drinks);
        setIsLoading(false);
        setIsLoading(false)
    }
    useEffect(() =>{
        getData()
    },[])
    useEffect(() =>{
      
    },[drinks])

    
    
    const Functionsort =() => {
      if( items % 2 === 0) {
        drinks.sort((a, b) => {
          return (a.strDrink.localeCompare(b.strDrink))})
        } else {
          drinks.sort((a, b) => {
            return (b.strDrink.localeCompare(a.strDrink))})
          }
      setTest(true)
      return (drinks);
    }

    useEffect(() =>{
      if(test){
        setDrinks(Functionsort())
        setItems(Math.floor((items+1)))
        setTest(false)
    }
  })


    

    
    return (
    <div>
      {isLoaded && <p>Loading,,,</p>}
      <table className='drinks' id='Table'>
        <tbody>
        <tr className='appx'>
          <td className='appx' onClick={Functionsort} >Напитки</td>
          <td className='appx' onClick={Functionsort}>Состав</td>
        </tr>
        {drinks.map(i => <tr key={i.idDrink}>
          <td style={styles}>{i.strDrink}</td> 
          <td style={styles} color="red">{i.idDrink}</td>
        </tr>
         ) }
        

        </tbody>

        
      </table>

    </div>)
}
