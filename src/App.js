import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home"
import { Order } from "./components/waitress/Order"
import { DeliveryKitchen } from "./components/kitchen/DeliveryKitchen"
import styled from "styled-components";
import { Boleta } from "./components/kitchen/Tiket";




 const App = () => {
  return (
   <ContenedorPrincipal>
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waitress" element={<Order />} />
          <Route path="/kitchen" element={<DeliveryKitchen />} /> 
          <Route path="/boletas" element={<Boleta />} />   
        </Routes>
      </div>
    </Router>
    </ContenedorPrincipal>
  );
}

const ContenedorPrincipal = styled.div`
 

`;

export default App;



