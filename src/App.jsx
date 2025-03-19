import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/pageLogin";
import Cadastro from "./pages/pageCadastro";
import Home from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="Cadastro" element={<Cadastro />} />
          <Route
            path="Home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
