import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {
  TextField, Button, Divider
} from "@mui/material";

export default function Add() {
  const params = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');

  const id = params.id;
  useEffect(() => {
    fetch('http://localhost:3009/collaborators/'+id)
      .then(response => response.json())
      .then(response => {
        setName(response.name);
        setDescription(response.description);
        setPhoto(response.photo);
      })
  }, [id]);


  const saveCoach = () => {
      fetch('http://localhost:3009/collaborators/'+id, {
        method: 'PATCH',
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

  const handleName = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <h1>Editar Coach</h1>

      <Divider/>

      <TextField value={name} onChange={handleName} fullWidth label="Nome" type="text"/><br/><br/>
      <TextField value={description} onChange={(event) => setDescription(event.target.value)} fullWidth label="Descrição" type="text"/><br/><br/>
      <TextField value={photo} onChange={(event) => setPhoto(event.target.value)} fullWidth label="Foto" type="url"/><br/><br/>
      <Button  onClick={saveCoach} fullWidth variant="contained">Cadastrar</Button>


    </div>
  )
}
