import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import Favorite from "../pages/Favorite";
import Details from "../pages/Details";
import Login from "../pages/Login";


export default function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />}/>
                    <Route path="favorite" element={<Favorite />}/>
                    <Route path="details" element={<Details />}/>
                    <Route path="login" element={<Login />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}