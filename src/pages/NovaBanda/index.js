import {TextField, Divider, Button, IconButton} from '@mui/material';
import {ArrowBack} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function NovaBanda() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [foto, setFoto] = useState('');

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };

  const handleChangeFoto = (event) => {
    setFoto(event.target.value);
  }

  const save = () => {
    fetch ('http://localhost:3009/bandas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        foto: foto,
      })
    });

    alert('Pronto!');

    navigate('/bandas');
  } //fim da function save

  return (
    <div>

      <h2 align="center">- Nova Banda -</h2>
      <Divider/>
      <form onSubmit={save} action="#">
        <TextField value={nome} onChange={handleChangeNome} label="Nome" fullWidth/>
        <TextField value={foto} onChange={handleChangeFoto} label="Foto" fullWidth/>

        <Button onClick={save} variant="contained" fullWidth>CONFIRMAR</Button>
      </form>

      <Link to="/bandas">
        <IconButton color="primary">
          <ArrowBack/>
        </IconButton>
      </Link>
    </div>
  )
}
