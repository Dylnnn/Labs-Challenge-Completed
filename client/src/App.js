import './App.css';
import { connect } from 'react-redux'; 
import NavBar from "./componentes/navBar/index"
import Search from "./componentes/navBar/search"
import Catalog from "./componentes/catalog/index"
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
