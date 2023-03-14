import logo from './logo.svg';
import './App.css';
import Header from "./pages/Header"
import Footer from "./pages/Footer"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className='contentWrapper'>
        <h2>body</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;
