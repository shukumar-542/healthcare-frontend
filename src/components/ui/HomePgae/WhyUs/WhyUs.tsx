import { Box, Container, Grid, Typography } from "@mui/material";
import assets from '@/assets'
import Image from "next/image";
import img from '@/assets/choose-us.png'
const servicesData = [
    {
        imageSrc: assets.svgs.award,
        title: "Award Winning Service",
        description:
            "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
        imageSrc: assets.svgs.award,
        title: "Best Quality Pregnancy Care",
        description:
            "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
        imageSrc: assets.svgs.award,
        title: "Complete Medical Equipments",
        description:
            "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
        imageSrc: assets.svgs.award,
        title: "Dedicated Emergency Care",
        description:
            "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
];

const WhyUs = () => {
    return (
        <Container>
            <Box sx={{
                textAlign: 'center'
            }}>
                <Typography component="h1" fontWeight={600} variant="h6" color="primary" >Why Us</Typography>
                <Typography>Why Choose Us</Typography>
            </Box>
            <Grid container spacing={2} mt={5} sx={{
                alignItems: 'center'
            }} >
                <Grid item md={6} >
                    <Box sx={{
                        display: 'flex', gap: '15px', backgroundColor: 'rgba(245,245,245,1)', padding: '15px', justifyItems: 'center', alignItems: "center",
                        borderRadius: "10px 100px 10px 10px"
                    }}>
                        <Box sx={{ backgroundColor: '#fff', padding: '10px' }}>
                            <Image src={servicesData[0].imageSrc} width={50} alt="doctor" />
                        </Box>
                        <Box>
                            <Typography component="h6" variant="h6">{

                                servicesData[0].title}</Typography>
                            <Typography variant="body2">{

                                servicesData[0].description}</Typography>

                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex', gap: '15px', backgroundColor: 'rgba(245,245,245,1)', padding: '15px', justifyItems: 'center', alignItems: "center",
                        borderRadius: "10px 100px 10px 10px"
                    }}>
                        <Box sx={{ backgroundColor: '#fff', padding: '10px' }}>
                            <Image src={servicesData[0].imageSrc} width={50} alt="doctor" />
                        </Box>
                        <Box>
                            <Typography component="h6" variant="h6">{

                                servicesData[0].title}</Typography>
                            <Typography variant="body2">{

                                servicesData[0].description}</Typography>

                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex', gap: '15px', backgroundColor: 'rgba(245,245,245,1)', padding: '15px', justifyItems: 'center', alignItems: "center",
                        borderRadius: "10px 100px 10px 10px"
                    }}>
                        <Box sx={{ backgroundColor: '#fff', padding: '10px' }}>
                            <Image src={servicesData[0].imageSrc} width={50} alt="doctor" />
                        </Box>
                        <Box>
                            <Typography component="h6" variant="h6">{

                                servicesData[0].title}</Typography>
                            <Typography variant="body2">{

                                servicesData[0].description}</Typography>

                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex', gap: '15px', backgroundColor: 'rgba(245,245,245,1)', padding: '15px', justifyItems: 'center', alignItems: "center",
                        borderRadius: "10px 100px 10px 10px"
                    }}>
                        <Box sx={{ backgroundColor: '#fff', padding: '10px' }}>
                            <Image src={servicesData[0].imageSrc} width={50} alt="doctor" />
                        </Box>
                        <Box>
                            <Typography component="h6" variant="h6">{

                                servicesData[0].title}</Typography>
                            <Typography variant="body2">{

                                servicesData[0].description}</Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box sx={{ display: 'flex', justifyContent:'center'}}>
                        <Image src={img} width={400} alt="doctor" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhyUs;