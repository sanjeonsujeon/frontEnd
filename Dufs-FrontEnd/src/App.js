import Routers from './router/Routers'
import styled from "styled-components"

import Header from "./Pages/Header"
import Footer from "./Pages/Footer"

const Body = styled.div`
  display: flex;
  flex-direction: column;
	justify-content: space-between;
`

function App() {
  return (
    <>
    <Body>
      <Header />
        <Routers />
      <Footer />
    </Body>
    </>
  );
}

export default App;
