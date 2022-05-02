import {useState, useEfect} from "react";
import Divider from '@mui/material/Divider';

export default function Dayane (){
    const [bandas, setBandas] = useState([]);
    useEfect (() => {
        fetch ('http://localhost:3009/bandas')
        .then(response => response.json())
        .then(response => setBandas(response));
    }, []);

    return(
        <div>
        <h2> Listar Bandas </h2>
        <Divider/>
        <ul>
            {bandas.map (cadaBanda => (
              <li>  <p>{cadaBanda.nome}</p>
                <img src={cadaBanda.foto} width="150px"/>
            </li>
            ))}
        </ul>
        </div>
    )
}