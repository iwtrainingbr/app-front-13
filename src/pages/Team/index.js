import * as React from 'react';
import {Link} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, dividerClasses } from '@mui/material';
import coach1 from './img/coach_leo.jpg';
import coach2 from './img/coach_bia.jpg';
import coach3 from './img/coach_carla.jpg';
import coach4 from './img/coach_jef.jpg';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import RemoveIcon from '@mui/icons-material/Remove';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import InstagramIcon from '@mui/icons-material/Instagram';
import './style.css'




export default function Team() {
  const [collaborators, setCollaborators] = React.useState([]);
  const [liked, setLiked] = React.useState(false);
  const handleLiked = () => {
    setLiked(!liked);
  }

  React.useEffect(() => {
    fetch('http://localhost:3009/collaborators')
      .then(response => response.json())
      .then(response => setCollaborators(response))
  }, []);

  const removeCoach = (id) => {
    if (false === window.confirm('Tem certeza?')) {
      return;
    }

    fetch('http://localhost:3009/collaborators/'+id, {
      method: 'DELETE'
    });

    setCollaborators(
      // collaborators.filter((cadaCoach) => {
      //   return cadaCoach.id !== id;
      // })
      collaborators.filter((cadaCoach) => cadaCoach.id !== id)
    )
  }

  return (
    <div>
      {collaborators.map(coach => {
        return (
          <Card className="marginCard">
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image= {coach.photo}
                alt="Coach Leo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {coach.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {coach.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Dias do Leo
              </Button>
            <IconButton onClick={handleLiked} aria-label="add to favorites">
              <FavoriteIcon className={liked && 'red'}/>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="instagram">
              <InstagramIcon/>
            </IconButton>
            <IconButton aria-label="Remover"  onClick={() => removeCoach(coach.id)}>
              <RemoveIcon/>
            </IconButton>
            <Link to={"/editar-coach/"+coach.id}>
              <EditIcon/>
            </Link>
            </CardActions>
          </Card>
        )
      })}



    </div>
  );
}
