import { Box, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'



const HomePage = () => {
  return (
    <Box>
      <Box sx={{ width: "100%", height: "200px", position: "relative" }}>
        <Box sx={{ width: "100%", height: "250px", objectFit: "cover" }} component="img" src={"/images/books.jpg"} alt='Books' />
        <Typography sx={{ position: "absolute", bottom: "50%", color: "white", fontSize: "20px", textAlign: "center", width: "100%", fontWeight: "bold" }}>Find your Books</Typography>
      </Box>

      <Box sx={{ display: "flex", marginTop: "80px" }} alignItems="center" justifyContent="center">
        <Grid item container xs={10} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ maxWidth: { xs: '300px', md: '400px', lg: '600px' }, width: { xs: '100%', md: '100%', lg: '900px' }, maxHeight: '100%', overflow: 'hidden' }}>
              <img src="/images/about.jpg" alt="" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Box>
          </Grid>

          <Grid gap={1} item xs={9} md={6} lg={6} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', my: 2 }}>
            <Grid item xs={11}>
              <Typography variant="h1" sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "15px", sm: "22px", md: "24px", lg: "32px" } }}>About</Typography>
              <Typography variant="h3" sx={{ fontSize: { xs: "12px", sm: "18px", md: "18px", lg: "22px" } }}>Our company was founded in the year 2000 with the aim of encouraging people to read more and acquire new knowledge. Our mission is to foster personal development by inspiring individuals to explore diverse topics and discover new passions. By promoting a love for reading, we believe that individuals can unlock their potential and broaden their horizons. Through our efforts, we strive to empower individuals to find joy in learning and to embark on a journey of self-discovery.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Carousel/>
    </Box>
  )
}

export default HomePage