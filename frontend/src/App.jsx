import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";

function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={
                    <MainLayout>
                        <Dashboard />
                    </MainLayout>
                }
            />

        </Routes>

    );

}

export default App;