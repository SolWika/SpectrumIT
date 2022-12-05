import { GlobalStyles } from "./styles/Global";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { WrapperPages } from "./components/WrapperPage/WrapperPage";
import { PersonPage } from "./pages/PersonPage";
import { RegistrationPage } from "./pages/RegistrationPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <WrapperPages>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PersonPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </BrowserRouter>
      </WrapperPages>
    </>
  );
}

export default App;
