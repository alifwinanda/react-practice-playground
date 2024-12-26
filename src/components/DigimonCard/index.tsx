import { Card, CardContent, CardMedia, Typography } from "@mui/material"

interface DigimonCardProps {
  name: string
  image: string
}

const DigimonCard = ({ image, name }: DigimonCardProps) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default DigimonCard
