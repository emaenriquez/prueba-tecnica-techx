import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <main className=" pt-20 px-4">
        <div className="w-full max-w-6xl mx-auto pt-25 pb-50">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
            TECHX INTERNSHIP TEST
            <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mt-3">
              Welcome to our site
            </span>
          </h1>
        </div>

        <ProductList />
        <ContactUs />
      </main>
    </>
  );
}

export default App;
