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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/relatorio" element={<Report/>}/>
        <Route path="/exemplo" element={<Exemplo/>}/>
        <Route path="/team" element={<Team/>}/>

        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
