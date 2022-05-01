import * as React from 'react';
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
import Divider from '@mui/material/Divider';
import InstagramIcon from '@mui/icons-material/Instagram';
import './style.css'




export default function Team() {
  
  const [liked, setLiked] = useState(false);
  const handleLiked = () => {
    set
  }

  return (
    <div>
      <Card className="marginCard">
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image= {coach1}
            alt="Coach Leo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Leonardo Lima
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
            Dias do Leo
          </Button>
        <IconButton onClick={handleLiked} aria-label="add to favorites">
          <FavoriteIcon classeName={liked && 'red'}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="instagram">
          <InstagramIcon/>
        </IconButton>
        </CardActions>
      </Card>
      <Divider></Divider>
      <Card className="marginCard">
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image= {coach2}
            alt="Coach bia"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Beatriz Souza
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Dias da Bia
          </Button>
          <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="instagram">
          <InstagramIcon/>
        </IconButton>
        </CardActions>
      </Card>
      <Divider></Divider>
      <Card className="marginCard">
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image= {coach3}
            alt="Coach Carla"

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Carla Lacerda
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Dias do Carla
          </Button>
          <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="instagram">
          <InstagramIcon/>
        </IconButton>
        </CardActions>
      </Card>
      <Divider></Divider>
      <Card className="marginCard">
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image= {coach4}
            alt="Coach jef"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Feferson Mendes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Dias do Jef
          </Button>
          <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="instagram">
          <InstagramIcon/>
        </IconButton>
        </CardActions>
      </Card>
      <Divider></Divider>
    
    </div>
  );
}