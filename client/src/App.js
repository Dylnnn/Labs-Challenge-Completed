import './App.css';
import { connect } from 'react-redux'; 
import NavBar from "./componentes/NavBar/index"
import Search from "./componentes/NavBar/search"
import Catalog from "./componentes/ProductCard/index"
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <NavBar />
     <Route path="/" component={Catalog}/>
    </div>
  );
}

export default App;
