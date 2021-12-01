import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import {StateType} from "./redux/state";


export type AppPropsType ={
    state: StateType
}

const App:React.FC<AppPropsType> = (props) => {



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path={"/profile"} element={<Profile posts={props.state.profilePage.posts}/>}/>
                        <Route path={"/dialogs"} element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
