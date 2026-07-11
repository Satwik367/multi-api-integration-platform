import { Routes, Route } from "react-router-dom";
import Logs from "./pages/Logs";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import APIMarketplace from "./pages/APIMarketplace";
import WorkflowBuilder from "./pages/WorkflowBuilder";

import WeatherExecutor from "./pages/executor/WeatherExecutor";
import GithubExecutor from "./pages/executor/GithubExecutor";
import NewsExecutor from "./pages/executor/NewsExecutor";
import CurrencyExecutor from "./pages/executor/CurrencyExecutor";
import GeminiExecutor from "./pages/executor/GeminiExecutor";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <Routes>

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/"
                element={
                    <ProtectedRoute>
                        <MainLayout>
                            <Dashboard />
                        </MainLayout>
                    </ProtectedRoute>
                }
            />

            <Route path="/marketplace"
                element={
                    <ProtectedRoute>
                        <MainLayout>
                            <APIMarketplace />
                        </MainLayout>
                    </ProtectedRoute>
                }
            />

            <Route path="/workflows"
                element={
                    <ProtectedRoute>
                        <MainLayout>
                            <WorkflowBuilder />
                        </MainLayout>
                    </ProtectedRoute>
                }
            />

            <Route path = "/logs"
                element={
                    <ProtectedRoute>
                    <MainLayout>
                        <Logs />
                    </MainLayout>
                    </ProtectedRoute>
                }
            />

            <Route path="/executor/weather"
                element={<ProtectedRoute><MainLayout><WeatherExecutor /></MainLayout></ProtectedRoute>}
            />

            <Route path="/executor/github"
                element={<ProtectedRoute><MainLayout><GithubExecutor /></MainLayout></ProtectedRoute>}
            />

            <Route path="/executor/news"
                element={<ProtectedRoute><MainLayout><NewsExecutor /></MainLayout></ProtectedRoute>}
            />

            <Route path="/executor/currency"
                element={<ProtectedRoute><MainLayout><CurrencyExecutor /></MainLayout></ProtectedRoute>}
            />

            <Route path="/executor/gemini"
                element={<ProtectedRoute><MainLayout><GeminiExecutor /></MainLayout></ProtectedRoute>}
            />

        </Routes>

    );

}

export default App;