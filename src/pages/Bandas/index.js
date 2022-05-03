import {useState, useEffect} from "react";
import Divider from '@mui/material/Divider';
import {Fab} from '@mui/material';
import {Add} from '@mui/icons-material';
import {Link} from "react-router-dom";
import "./styles.css";

export default function Bandas () {
  const [bandas, setBandas] = useState([]);

  // npx json-server --watch db.json --port 3009
  useEffect(() => {
      fetch('http://localhost:3009/bandas', {method: 'GET'})
        .then(response => response.json())
        .then(response => setBandas(response));
  }, []);

  const remove = () => {
    let id = 4;

    fetch('http://localhost:3009/bandas/'+id, {
      method: 'DELETE'
    })
  }

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

      <Link to="/nova-banda">
        <Fab color="primary" className="fab">
          <Add/>
        </Fab>
      </Link>
    </div>
  )
}
