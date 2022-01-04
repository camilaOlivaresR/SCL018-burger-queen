import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
/*  BrowserRouter as Router,
  Switch,
  Route,
  Link */
import { Home } from "./components/Home"
import { Order } from "./components/waitress/Order"
import { DeliveryKitchen } from "./components/kitchen/DeliveryKitchen"

export const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="cocina" element={<Order />} />
          <Route path="servicio" element={<DeliveryKitchen />} />
        </Routes>
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