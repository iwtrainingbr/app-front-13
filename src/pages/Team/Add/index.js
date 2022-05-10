import {useState} from "react";
import {
  TextField, Button, Divider
} from "@mui/material";

export default function Add() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');

  const saveCoach = () => {
      fetch('http://localhost:3009/collaborators', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          description: description,
          photo: photo
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      alert('deu certo');
  };

  return (
    <div>
      <h1>Novo Coach</h1>

      <Divider/>

      <TextField data-cy="coach-name" value={name} onChange={(event) => setName(event.target.value)} fullWidth label="Nome" type="text"/><br/><br/>
      <TextField value={description} onChange={(event) => setDescription(event.target.value)} fullWidth label="Descrição" type="text"/><br/><br/>
      <TextField value={photo} onChange={(event) => setPhoto(event.target.value)} fullWidth label="Foto" type="url"/><br/><br/>
      <Button  onClick={saveCoach} fullWidth variant="contained">Cadastrar</Button>


    </div>
  )
}
