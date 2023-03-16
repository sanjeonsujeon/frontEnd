import Routers from './router/Routers'
import './App.css';
import styled from "styled-components"
import Header from "./Pages/Header"
import Footer from "./Pages/Footer"

const Center = styled.div`
  height: 92vh
  display: flex;
	flex-direction: row;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
	justify-content: space-between;
`
/**
.wrapper {
  text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
}
 */

function App() {
  return (
    <>
    <Body>
      <Header />
      <Center> 
        <Routers />
      </Center>
      <Footer />
    </Body>
    </>
  );
}

export default App;
