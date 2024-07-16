import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Page404 from "./pages/Page404";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Services />}></Route>
        <Route path="Contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
