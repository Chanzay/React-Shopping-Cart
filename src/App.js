import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LaoClothes1 from './Pictures/Laoclothes.jpg'
import ChineseClothes1 from './Pictures/ChineseClothes1.jpg'
import ChineseClothes2 from './Pictures/ChineseClothes2.jpg'
import LaoClothes2 from './Pictures/LaoClothes2.jpg'
import ChineseClothes3 from './Pictures/ChineseClothes3.jpg'
import ChineseClothes4 from './Pictures/ChineseClothes4.jpg'
import { createContext, useState } from 'react';

export const MyContext = createContext("");

function App() {
const items = [
  {
    id: 1,
    pictureUrl: LaoClothes1,
    name: "Lao Traditional Wear (Brown)",
    price: 50.59
  },
  {
    id: 2,
    pictureUrl: ChineseClothes1,
    name: "Chinese Traditional Wear (Red)",
    price: 80.59
  },
  {
    id: 3,
    pictureUrl: ChineseClothes2,
    name: "Chinese Traditional Wear (Rose)",
    price: 90.59
  },
  {
    id: 4,
    pictureUrl: LaoClothes2,
    name: "Lao Traditional Wear (Purple)",
    price: 70.59
  },
  {
    id: 5,
    pictureUrl: ChineseClothes3,
    name: "Chinese Traditional Wear (Red)",
    price: 90.59
  },
  {
    id: 6,
    pictureUrl: ChineseClothes4,
    name: "Chinese Traditional Wear (Blue)",
    price: 90.59
  },
];

const [item, setItem] = useState([]);

const handleClick = (selectedItem) => {
  setItem((prevItems) => {
    // Check if the item already exists in the cart
    const existingItem = prevItems.find((item) => item.id === selectedItem.id);

    if (existingItem) {
      // If the item already exists, update its quantity
      return prevItems.map((item) =>
        item.id === selectedItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // If the item doesn't exist, add it with a quantity of 1
      return [...prevItems, { ...selectedItem, quantity: 1 }];
    }
  });
};

  return (
    <div>
      <MyContext.Provider value={{item, setItem}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home items={items} handleClick={handleClick} />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
