// REACT
import { BrowserRouter, Routes, Route } from "react-router-dom"

// PAGES
import Home from '../pages/Home'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}