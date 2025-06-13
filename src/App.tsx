import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-4">
        <h1 className="text-3xl font-bold">
          TECHX INTERNSHIP TEST
          <span>Welcome to our site</span>
        </h1>
        <ProductList />
        <ContactUs />


      </main>
    </>
  );
}

export default App;
