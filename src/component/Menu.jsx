import React from 'react'

const Menu = ({title,id,image}) => {
    return (
      
            
              <div className='card p-2'>
                        <img src={image} alt="" width="200"/>
                        <p>{title}</p>
                </div>
  
    )
}

export default Menu
