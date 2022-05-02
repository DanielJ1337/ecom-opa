import "./App.css";

// import components
import { Navbar, ProductLightbox, Product } from "../../components";

import { ProductProvider } from "../../lib/productContext";

function App() {
  return (
    <ProductProvider>
      <div className='App'>
        <Navbar />
        <Product />
      </div>
    </ProductProvider>
  );
}

export default App;
