import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Navbar from './componentes/navegacion/Navbar';
import Experiences from './componentes/paginas/Experiences';
import Home from './componentes/paginas/Home';
import Proyects from './componentes/paginas/Proyects';
import ItemListContainer from './componentes/items/ItemListContainer';
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
          <Route path='/' exact component={<Home/>}/>
          <Route path='/Proyects' component={<Proyects/>}/>
          <Route path='/Experiences' component={<Experiences/>}/>
        </Routes>
      </Router>
      <h2></h2>
      <div className='general-container'>
        <ItemListContainer title={'Productos Recomendados'} products={productos}/>
      </div>
    </div>
  );
}

export default App;
