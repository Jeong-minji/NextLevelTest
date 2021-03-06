import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Main from "../src/pages/Main/Main";
import SignIn from "./pages/SignIn/SignIn";
import GlobalStyle from "./styles/global-styles";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;