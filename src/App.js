import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import shopData from "./shopData.json";
import ShopItem from "./ShopItem";


function App() {
  const [cart, setCart] = useState({});
  const [price, setPrice] = useState(0);
  const [type, setType] = useState([]);
  const [category, setCategory] = useState([]);
  const [filteredData, setFilteredData] = useState([...shopData]);

  const updateCart = (uid) => {
    let newCart = cart;
    if (newCart[uid]) {
      newCart[uid] += 1;
    } else {
      newCart[uid] = 1;
    }
    setPrice(price + shopData[uid].price)
    setCart({...newCart});
  }

  const removeCart = (uid) => {
    let newCart = cart;
    if (newCart[uid]) {
      newCart[uid] -= 1;
      setPrice(price - shopData[uid].price)
    } else {
      newCart[uid] = 0;
    }
    setCart({...newCart});  
  }

  const selectFilterType = (eventKey) => {
    let newFilters = [...type]
    if (type.includes(eventKey)) {
      const i = type.indexOf(eventKey);
      newFilters.splice(i, 1);
    }
    else {
      newFilters.push(eventKey);
    }
    setType(newFilters);
  };

  const selectCategoryType = (eventKey) => {
    let newCategory = [...category]
    if (category.includes(eventKey)) {
      const i = category.indexOf(eventKey);
      newCategory.splice(i, 1);
    }
    else {
      newCategory.push(eventKey);
    }
    setCategory(newCategory);
  };
  
  const brandFilter = item => {
    // all items should be shown when no filter is selected
    if (type.includes(item.brand)) {
      return true
    } else {
      return false
    }
  }

  const categoryFilter = item => {
    // all items should be shown when no filter is selected
    // console.log(category, item.brand, category.includes(item.category))
    if (category.includes(item.category)) {
      return true
    } else {
      return false
    }
  }

// whenever update type, category call this useEffect
useEffect(() => {
  // console.log(category);
  filterArr();
}, [type, category]);

  const filterArr = () => {
    if ((type.length == 0) && (category.length == 0)) {
      setFilteredData(shopData)
    } else {
     // if both selected
     if (!(category.length == 0) && !(type.length == 0)){
        setFilteredData(shopData.filter(((item) => brandFilter(item))).filter((item) => categoryFilter(item)))
      } 
      //if category selected
      else if(!(type.length == 0)) {
        setFilteredData(shopData.filter(((item) => brandFilter(item))))
      } 
      //if brand selected
      else if (!(category.length == 0)) { 
        setFilteredData(shopData.filter(((item) => categoryFilter(item))))
      }
    }
  }

  const handleSort = (t) => {
    if (t == "lowToHigh"){
      const lowToHigh = filteredData.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      } else {
        return 1;
      }
    });
    setFilteredData([...lowToHigh])
  } else if (t == "highToLow") {
    const highToLow = filteredData.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      } else {
        return 1;
      }
    });
    setFilteredData([...highToLow])
  } else if (t == "reset") {
    const uidSort = filteredData.sort((a, b) => {
      if (a.uid < b.uid) {
        return -1;
      } else {
        return 1;
      }
    });
    setFilteredData([...uidSort])
  }
  } 

  return (
    <div className="full">
      <h1><b>Providence Classic Tennis Shop</b> </h1>
      <h2>Brand</h2>
      <ToggleButtonGroup type="checkbox" defaultValue={[1, 2, 3, 4]} className="mb-2">
        <ToggleButton id="tbg-check-1" value={1} onClick={() => selectFilterType("Nike")}>
          Nike
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={2} onClick={() => selectFilterType("Asics")}>
          Asics
        </ToggleButton>
        <ToggleButton id="tbg-check-3" value={3} onClick={() => selectFilterType("Wilson")}>
          Wilson
        </ToggleButton>
        <ToggleButton id="tbg-check-4" value={4} onClick={() => selectFilterType("Babolat")}>
          Babolat
        </ToggleButton>
      </ToggleButtonGroup>
      <h2>Category</h2>
      <ToggleButtonGroup type="checkbox" defaultValue={[5, 6, 7, 8]} className="mb-2">
        <ToggleButton id="tbg-check-5" value={5} onClick={() => selectCategoryType("racquets")}>
          Racquets
        </ToggleButton>
        <ToggleButton id="tbg-check-6" value={6}  onClick={() => selectCategoryType("clothes")}>
          Clothes
        </ToggleButton>
        <ToggleButton id="tbg-check-7" value={7} onClick={() => selectCategoryType("shoes")}>
          Shoes
        </ToggleButton>
        <ToggleButton id="tbg-check-8" value={8} onClick={() => selectCategoryType("balls")}>
          Balls
        </ToggleButton>
      </ToggleButtonGroup>
      <h2>Sort</h2>
      <button onClick={() => handleSort("lowToHigh")}>Price (low to high)</button>
      <button onClick={() => handleSort("highToLow")}>Price (high to low)</button>
      <button onClick={() => handleSort("reset")}>Reset</button>

    <div className="layoutContainer">
    <div className="spacing">
    </div>
      <div className="container">
        {filteredData.map((item, index) => (
          <>
            <ShopItem updateCart = {updateCart} removeCart = {removeCart} item = {item} index = {index}/>
          </>
        ))}
      </div>
      <div className="cart">
        <h2>Cart total: ${price}</h2>
          {Object.keys(cart).map((idx) => {
           return  <div>{shopData[idx].name + " x " + cart[idx] + " = $" + cart[idx]*shopData[idx].price}</div>
                })}
      </div>
  </div>  
  </div>
  )
} export default App;


