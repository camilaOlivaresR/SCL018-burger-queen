import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home"
import { Order } from "./components/waitress/Order"
import { DeliveryKitchen } from "./components/kitchen/DeliveryKitchen"
import {Ticket } from "./components/kitchen/Ticket";



{/**/}

 const App = () => {
  return (
   <>
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitress" element={<Order />} />
          <Route path="/kitchen" element={<DeliveryKitchen />} /> 
          <Route path="/ticket" element={<Ticket />} />   
        </Routes>
      </div>
    </Router>
    </>
  );
}



export default App;



