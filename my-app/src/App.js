import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Navbar from './componentes/navegacion/Navbar';
import Experiences from './componentes/paginas/Experiences';
import Home from './componentes/paginas/Home';
import Proyects from './componentes/paginas/Proyects';
import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact component={Home}/>
          <Route path='/Proyects' component={Proyects}/>
          <Route path='/Experiences' component={Experiences}/>
        </Routes>
      </Router>
      <h2>Portfolio React Valentino Oviedo</h2>
      <div className='general-container'>
        <ItemListContainer title={'¡Bienvenido a React!'}/>
        <ItemCount initial={0} stock={3}/>
      </div>
    </div>
  );
}

export default App;
