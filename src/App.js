import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Deals from './components/Deals';

export default function App() {
  const [deals, setDeals] = useState([]);
  const [formInputs, updateFormInputs] = useState({
    restaurant: '',
    category: '',
    content: ''
  });
  const getDeals = async ()=>{
    try{
      const response = await fetch('http://localhost:3000/deals');
      const data = await response.json();
      setDeals(data)
    }catch(error){
      console.error(error)
    }
  }
  useEffect(
    ()=>{
      (
        async function (){
           await getDeals();
        }
      )()
    }, [])
  const handleChange = (event) => {
    const updatedFormInputs = Object.assign({}, formInputs, { [event.target.id]: event.target.value})
    updateFormInputs(updatedFormInputs);
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/deals',
        formInputs
      );
      const createdDeal = response.data
      await updateFormInputs({
        restaurant: '',
        category: '',
        content: ''
      })
      await setDeals([createdDeal, ...deals])
    }catch(error){
      console.error(error)
    }
  }
  return (
    <div className="App">
        <div className="container">
            <nav>
              <form onSubmit={handleSubmit}>
                <label htmlFor="restaurant">Restaurant</label>
                <input
                  type="text"
                  id="restaurant"
                  onChange={handleChange}
                  value={formInputs.restaurant}
                  />
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  id="category"
                  onChange={handleChange}
                  value={formInputs.category}
                  />
                <label htmlFor="content">Content</label>
                <input
                  type="text"
                  id="content"
                  onChange={handleChange}
                  value={formInputs.content}
                  />
                <input type="submit" className="submit" />
              </form>
            </nav>
            <main>
              <Deals deals={deals}/>
            </main>
            <aside>
            </aside>
        </div>
        <footer />
    </div>
  );
}
