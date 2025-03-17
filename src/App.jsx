import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={} />
        <Route path="/ListEvent" element={<ListEvent />} />
        <Route path="/evento/novo" element={<CriarEvento />} />
        <Route path="/organizadores" element={<Organizadores />} />
        <Route path="/ingressos" element={<Ingressos />} />
      </Routes>
    </BrowserRouter>
  );
}