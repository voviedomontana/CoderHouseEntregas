import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Navbar from './componentes/navegacion/Navbar';
import Home from './componentes/paginas/Home';
import Products from './componentes/paginas/Products'
import Contact from './componentes/paginas/Contact'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { useState, useEffect } from 'react';
import productos from './componentes/utils/products';



function App() {
  const [setProducts] = useState([])
    
    useEffect( () => {
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
        .catch( (err) => {
            console.log("Catch: Fallo la llamada.", err)
        })
        .finally( () => {
            // console.log("Finally: termino la promesa")
        })
    }, [])

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 4000)
        })
    }  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
      <div className='general-container'>
      <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
