import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/06/lizard-iguana-1296x728-header.jpg?w=1155&h=1528"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/10140482_den8mp.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.natgeofe.com/n/0f5acb57-0b12-4373-99f7-d142634ce444/STOCK-MM10100_foto7_lagartija_chacaltaya_square.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
      </Grid>
    </Box>
  );
}