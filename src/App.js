import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import Report from "./pages/Report";
import Home from "./pages/Home";
import Exemplo from "./pages/Exemplo";
import NotFound from "./pages/NotFound";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Tutorial from "./pages/Tutorial"
import Support from "./pages/Support";
import Horarios from "./pages/Horarios";
import Cadastro from "./pages/Cadastro"

import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{width: '96%', marginLeft: '2%'}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tutorial" element={<Tutorial/>}/>
        <Route path="/relatorio" element={<Report/>}/>
        <Route path="/exemplo" element={<Exemplo/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/ajuda" element={<Support/>}/>
        <Route path="/horarios" element={<Horarios/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>

        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
