import React from 'react'
import NavBar from '../Components/NavBar'
import '../App.css';

function Home({items, handleClick}) {
  return (
    <div>
      <NavBar />
      <div className='items'>
        <div className='itemsBox'>
            {items.map (item =>(
                <div key={item.id}>
                    <img src={item.pictureUrl} alt='AstianTriditions' className='pictures'></img>
                    <div>{item.name}</div>
                    <div>${item.price}</div>
                    <button onClick={() => handleClick(item)} className='button'>Add to cart</button>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home
