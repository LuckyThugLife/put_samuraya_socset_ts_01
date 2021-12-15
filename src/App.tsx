import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import {PostsType, StateType} from "./redux/state";

export type AddPostType = {
    addPost: (postText: string) => void
    message: string
    posts: Array<PostsType>
}


export type AppPropsType ={
    state: StateType
    addPost: (postText: string) => void

}



const App:React.FC<AppPropsType> = (props) => {



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path={"/profile"} element={
                            <Profile posts={props.state.profilePage.posts}
                                     addPost={props.addPost}/>}/>
                        <Route path={"/dialogs"} element={
                            <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                     messages={props.state.dialogsPage.messages}/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}



export default App;
