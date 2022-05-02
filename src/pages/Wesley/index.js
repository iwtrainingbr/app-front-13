import { Divider } from "@mui/material";
import { useState, useEffect } from "react";

export default function Wesley() {

  const [bandas, setbandas] = useState([]);

  // npx json.server --watch db.json --port 3009
  
  useEffect(() => {
    fetch('http://localhost:3009/bandas')
      .then(response => response.json())
      .then(response => setbandas(response));
  }, []);



  return (
    <div>
      <Divider>
        <h1>Bandas</h1>
      </Divider>
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