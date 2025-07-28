import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import Dashboard from "./pages/dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import Students from "./pages/Students";
import Coaches from "./pages/Coaches";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="students" element={<Students />} />
                    <Route path="coaches" element={<Coaches />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
