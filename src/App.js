import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/*  BrowserRouter as Router,
  Switch,
  Route,
  Link */
import { Home } from "./components/Home"
import { Order } from "./components/waitress/Order"
import { DeliveryKitchen } from "./components/kitchen/DeliveryKitchen"
import styled from "styled-components";




 const App = () => {
  return (
   <ContenedorPrincipal>
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitress" element={<Order />} />
          <Route path="/kitchen" element={<DeliveryKitchen />} />
        </Routes>
      </div>
    </Router>
    </ContenedorPrincipal>
  );
}

const ContenedorPrincipal = styled.div`
 

`;

export default App;



/*<



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