import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Section from "./components/Section";
import Services from "./components/Services";
import Testimoni from "./components/Testimoni";

function App() {
  return (
    <div className="container mx-auto">
      <Header />

      <Section />

      <Services />

      <Product />

      <Testimoni />

      <Footer />
    </div>
  );
}

export default App;
