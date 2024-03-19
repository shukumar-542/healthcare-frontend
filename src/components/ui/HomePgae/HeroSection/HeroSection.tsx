import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets"

const HeroSection = () => {
    return (
        <Container sx={{
            my: 16,
            display: "flex",

        }}>
            <Box sx={{
                flex: 1,
                position: 'relative'
            }}>
                <Box sx={{
                    position: "absolute",
                    width: '700px',
                    top: "-90px",
                    left: "-120px"
                }}>
                    <Image src={assets.svgs.grid} alt="img" />
                </Box>
                <Typography variant="h3" component="h1" fontWeight={600} >Healthier Hearts</Typography>
                <Typography variant="h3" component="h1" fontWeight={600} >Come From</Typography>
                <Typography variant="h3" component="h1" fontWeight={600} color="primary.main" >Preventive Care</Typography>
                <Typography variant="h6" component="p" fontWeight={400} sx={{
                    my: 4
                }} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis ea ut impedit, eum labore pariatur.</Typography>
                <Box sx={{
                    display: "flex", gap: "5px"
                }}>
                    <Button>Make Appointment</Button>
                    <Button variant="outlined" sx={{ ml: "5px" }} >Contact Us</Button>
                </Box>
            </Box>
            <Box sx={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                mt: 0,
                p: 1
            }}>
                <Box sx={{
                    position: 'absolute',
                    left: '200px',
                    top: '-30px'
                }}>
                    <Image src={assets.svgs.arrow} width={100} height={100} alt="arrow" />
                </Box>
                <Box sx={{
                justifyContent: 'center',
                display: 'flex',  gap: 2,
                }}>
                    <Box mt={4} >
                        <Image src={assets.images.doctor1} width={240} height={380} alt="doctor1" />
                    </Box>
                    <Box>
                        <Image src={assets.images.doctor2} width={240} height={350} alt="doctor1" />
                    </Box>
                    <Box sx={{
                        position: "absolute",
                        top: "220px",
                    }} >
                        <Image src={assets.images.doctor3} width={230} height={230} alt="doctor1" />
                    </Box>
                    <Box sx={{
                        position: "absolute",
                        bottom : "-20px",
                        right : 0,
                        zIndex : "-1"
                    }} >
                        <Image src={assets.images.stethoscope} width={180} height={180} alt="doctor1" />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default HeroSection;