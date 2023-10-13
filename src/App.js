import "./App.css";
import Contact from "./Components/Contact";
import Form from "./Components/Form";
import Layouts from "./Components/Layouts/Layouts";
import About from "./Components/Pages/About";
import AddEventListener from "./Components/Pages/AddEventListener/AddEventListener";
import Blog from "./Components/Pages/Blogs/Blog";
import Car from "./Components/Pages/Car/Car";
import Home from "./Components/Pages/Home";
import NoPage from "./Components/Pages/NoPage";
import Service from "./Components/Projects/Service/Service";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Projects/NavBar/Navbar";
import Hero from "./Components/Projects/Hero/Hero";
import Menu from "./Components/Projects/Menu/Menu";
import Customer from "./Customer/Customer";

function App() {
  return (
    <div className="App">
      {/*   <Home />
      <Contact />
      <Car />
      <AddEventListener />
      <Form /> */}
      {/*  <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Layouts />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <div className=" pinkishWhite">
        <Navbar />
        <Hero />
      </div>
      <Service />
      <Menu />
      <Customer />
    </div>
  );
}

export default App;
