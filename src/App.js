// import './App.css';
import Navbar from './components/Navbar';
import {useState} from "react"
import About from './components/About';
import Contact from './components/Contact';
function App() {
  const [currentPage, setCurrentPage] = useState("Home")
  function Navigation () {
    if (currentPage === "Home") {
      return <h2>Homepage</h2>
    } else if (currentPage === "About") {
      return <About/>
    } else if (currentPage === "Contact") {
      return <Contact/>
    }
  }
  return (
    <div className="App">
      <header className="App-header">
       <Navbar setPage= {setCurrentPage}/>
       {Navigation()}
      </header>
      <div className="">
        
      </div>
    </div>
  );
}

export default App;
