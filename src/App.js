
import {
  BrowserRouter as Router,

  Route,
  Link
} from "react-router-dom";

export const App = () => {
  return (
   <Router>
       <div className="container">
         <h1>Navbar</h1>
    
        <Route path="/contacto">
          Pagina de contacto
        </Route>
        <Route path="/">
          Pagina de Inicio
          </Route>
    
      </div>
    </Router>
  );
}

export default App;

/*




import { Home} from "./components/home";
import { Order } from "./components/waitress/order";

function App() {
  return (
    <Router>
     
      <Route exact path="/" component={Home} />
      <Route path="/about" component={Order} />
      

      </Router>
        );
      }
      */