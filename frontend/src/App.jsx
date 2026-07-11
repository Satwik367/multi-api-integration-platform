import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import APIMarketplace from "./pages/APIMarketplace";

import MainLayout from "./layouts/MainLayout";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <Routes>

            <Route

                path="/login"

                element={<Login />}

            />

            <Route

                path="/register"

                element={<Register />}

            />

            <Route

                path="/"

                element={

                    <ProtectedRoute>

                        <MainLayout>

                            <Dashboard />

                        </MainLayout>

                    </ProtectedRoute>

                }

            />

            <Route

                path="/marketplace"

                element={

                    <ProtectedRoute>

                        <MainLayout>

                            <APIMarketplace />

                        </MainLayout>

                    </ProtectedRoute>

                }

            />

        </Routes>

    );

}

export default App;