import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path={"/profile"} element={<Profile/>}/>
                        <Route path={"/dialogs"} element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
