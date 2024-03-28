import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TopRatedDoctors = async () => {
    const res = await fetch('http://localhost:5000/api/v1/doctor?page=1&limit=3')
    const { data: doctors } = await res.json();
    return (
        <Box sx={{
            my: 10, py: 25,
            backgroundColor: "rgba(20,20,20,0.1)",
            clipPath: "polygon( 0 10%, 100% 20%, 100% 95%,0 85%)"
        }}>
            <Box sx={{
                textAlign: 'center', margin: '40px 0'
            }}>
                <Typography variant="h3" component="h1" fontWeight={600} color="primary.main" >Top Rated Doctors</Typography>
                <Typography variant="h6" component="p" fontWeight={400} sx={{
                    my: 4
                }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ea ut impedit, eum labore pariatur.</Typography>
            </Box>
            <Container sx={{
                margin: "30px auto"
            }}>
                <Grid container spacing={2}>
                    {
                        doctors.map((doctor: any) => (
                            <Grid item key={doctor.id} md={4}>
                                <Card >
                                    <Box>
                                        <Image src={doctor.profilePhoto} width={500} height={100} alt="doctor image" />
                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {doctor.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {doctor.qualification},{doctor.designation}
                                        </Typography>
                                        <Typography variant="body2" mt={1} color="text.secondary">
                                            <LocationOnIcon />
                                            {doctor.address}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{
                                        justifyContent: 'space-around'
                                    }}>
                                        <Button size="small">Book Now</Button>
                                        <Button variant="outlined">View Profile</Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        ))
                    }


                </Grid>
                <Box sx={{ textAlign: "center" }}>
                    <Button variant="outlined" sx={{ marginTop: "20px" }} >View Details</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default TopRatedDoctors;