import {useState, useEffect} from "react";
import Divider from '@mui/material/Divider';

export default function Alessandro () {
  const [bandas, setBandas] = useState([]);

  // npx json-server --watch db.json --port 3009
  useEffect(() => {
      fetch('http://localhost:3009/bandas')
        .then(response => response.json())
        .then(response => setBandas(response));
  }, []);

  return (
    <div>
      <h2>Listar Bandas</h2>
      <Divider/>

      <ul>
        {bandas.map(cadaBanda => (
          <li>
            <p>{cadaBanda.nome}</p>
            <img src={cadaBanda.foto} width="200px"/>
          </li>
        ))}
      </ul>
    </div>
  )
}
