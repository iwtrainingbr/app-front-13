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
import Sobre from "./pages/Sobre";
import Cadastro from "./pages/Cadastro";
import Like from "./pages/Like";
import Wesley from "./pages/Wesley";
import Dayane from "./pages/Dayane";
import Bandas from "./pages/Bandas";

import NovaBanda from "./pages/NovaBanda";

import AddCoach from "./pages/Team/Add";
import EditCoach from "./pages/Team/Edit";


import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{width: '96%', marginLeft: '2%', height: '100%'}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tutorial" element={<Tutorial/>}/>
        <Route path="/relatorio" element={<Report/>}/>
        <Route path="/exemplo" element={<Exemplo/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/novo-coach" element={<AddCoach/>}/>
        <Route path="/editar-coach/:id" element={<EditCoach/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/ajuda" element={<Support/>}/>
        <Route path="/horarios" element={<Horarios/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/like" element={<Like/>}/>
        <Route path="/dayane" element={<Dayane/>}/>
        <Route path="/bandas" element={<Bandas/>}/>
        <Route path="/nova-banda" element={<NovaBanda/>}/>

        <Route path="/wesley" element={<Wesley/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
