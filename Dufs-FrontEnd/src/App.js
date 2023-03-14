import logo from './logo.svg';
import './App.css';
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Main from "./pages/Main"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className='contentWrapper'>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
