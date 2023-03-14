import Routers from './router/Routers'
import './App.css';
import Header from "./Pages/Header"
import Footer from "./Pages/Footer"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className='contentWrapper'>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
