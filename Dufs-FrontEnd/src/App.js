import Routers from './router/Routers'
import styled from "styled-components"

import Header from "./Component/Header"
import Footer from "./Component/Footer"

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
