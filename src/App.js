import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog"

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar />
      <Blog />
      {/* <About /> */}

    </div>
  );
}

export default App;
