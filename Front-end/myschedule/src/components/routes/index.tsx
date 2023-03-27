import {Navigate, Route, Routes} from "react-router-dom"
import { Login } from "../../pages/Login"
import { Signup } from "../../pages/Signup"

export const RoutesMain = () => (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
)