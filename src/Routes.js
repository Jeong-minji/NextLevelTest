import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Main from "../src/Main";
import SignIn from "../src/SignIn";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;