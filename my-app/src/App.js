import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/navegacion/Navbar';
import Detail from './componentes/paginas/Detail';
import Products from './componentes/paginas/Products';
import Celulares from './componentes/paginas/Celulares';
import Computadoras from './componentes/paginas/Computadoras';
import Relojes from './componentes/paginas/Relojes';
import Cart from './componentes/paginas/Cart';
import {CartProvider} from './componentes/CartContext/CarContext'

function App() {
  /*
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
    }  */
  return (
    <CartProvider>
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/" element={<Products/>} />
          <Route path="/Product/:id" element={<Detail />} />
          <Route path="/Productos/Celulares" element={<Celulares/>} />
          <Route path="/Productos/Computadoras" element={<Computadoras/>} />
          <Route path="/Productos/Relojes" element={<Relojes/>} />
        </Routes>
      </Router>
      <div className="general-container"></div>
    </div>
    </CartProvider>
  );
}

export default App;
