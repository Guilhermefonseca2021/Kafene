import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

interface Props {
    name: string,
    description: string
}

export default function CardBox({name, description}: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image="https://avatars.githubusercontent.com/guilhermefonseca2021"
          alt="developer contribuitor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            <a className="badge-base__link LI-simple-link" href="https://br.linkedin.com/in/guilherme-fonseca-dos-santos-a49594207?trk=profile-badge">Guilherme Fonseca dos santos</a>         
        </Button>
      </CardActions>
    </Card>
  );
}
