import { StyledMainContainer } from "./components/styles/MainContainer.styled";
import { GlobalStyles } from "./components/styles/Global";
import { StyledModal } from "./components/styles/Modal.styled";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledMainContainer>
        <StyledModal></StyledModal>
      </StyledMainContainer>
    </>
  );
}

export default App;
