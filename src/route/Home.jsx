import React, { useState } from 'react'
import Hero from '../component/Hero'
import InputField from '../component/InputField'
import Menu from '../component/Menu'
import Nav from '../component/Nav'
const Home = () => {
  const [menu,setMenu] = useState("Burger")
  const [data,setData] = useState([])

  React.useEffect(()=>{
    fetch(`https://api.spoonacular.com/food/products/search?query=${menu}&apiKey=4df32ad9a2c24ed8b72096710375c685`) 
    .then(response => response.json())
    .then(data => {
        setData(data.products)
        // console.log(data.products)
    }
        );
  
  
  },[menu])
  return (
    <div>
      <Nav/>
   
      <Menu />
      <div className='d-flex'>
{data?.map((obj,indx)=>{
  return (<Menu title={obj.title} id = {obj.id} image={obj.image}/>)
})}
    </div>
      {/* <Hero/> */}
    </div>
  )
}

export default Home
