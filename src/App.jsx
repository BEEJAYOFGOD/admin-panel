import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/login";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import Students from "./pages/Students";
import Coaches from "./pages/Coaches";
import Resources from "./pages/Resources";
import Groups from "./pages/Groups";
import Programs from "./pages/Programs";
import Avatars from "./pages/avatar";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="students" element={<Students />} />
                    <Route path="coaches" element={<Coaches />} />
                    <Route path="resources" element={<Resources />} />
                    <Route path="groups" element={<Groups />} />
                    <Route path="programs" element={<Programs />} />
                    <Route path="avatars" element={<Avatars />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
