//import Button from "./components/Button";

import React from "react";

import {
  Button,
  TextField,
  Divider,
  Switch
} from "@mui/material";

import Favorite from "@mui/icons-material/Favorite";

function Exemplo() {
  const [visibility, setVisibility] = React.useState(false);

  const alterarVisibilidade = () => {
      setVisibility(!visibility);
  }

  let word = 'Aeww';
  return (
    <div>
      E {word}
      <br/><br/>

      {
        visibility === true && <TextField label="Nome" type="password"/>
      }

      <br/>

      <Divider/>

      <br/>

      <Button variant="contained">
        <Favorite/>
        Clique aqui
      </Button>

      <Button variant="outlined">Clique aqui</Button>
      <Button variant="contained" color="error">Clique aqui</Button>
      <Button>Clique aqui</Button>

      <br/>
      <Switch onChange={alterarVisibilidade} color="error"/>

    </div>
  );
}

export default Exemplo;
