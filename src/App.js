import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/*  BrowserRouter as Router,
  Switch,
  Route,
  Link */
import { Home } from "./components/Home"
import { Order } from "./components/waitress/Order"
import { DeliveryKitchen } from "./components/kitchen/DeliveryKitchen"
import './App.css'




export const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="kitchen" element={<DeliveryKitchen />} />
          <Route path="waitress" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

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