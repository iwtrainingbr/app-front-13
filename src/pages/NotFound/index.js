import img_404 from "./404.png";
import Button from "@mui/material/Button";

export default function NotFound() {
  return (
    <div align="center">
      <h1>Ops, Página não encontrada.</h1>

      <img src={img_404} width="320" height="205" />

      <div>
        <Button variant="outlined">VOLTAR PRA PÁGINA INICIAL</Button>
      </div>
      
    </div>
  )
}
