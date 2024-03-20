import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async() => {
    const res = await fetch("http://localhost:5000/api/v1/specialties",{
        next : {
            revalidate : 30
        }
    })
    const {data : specialist} = await res.json();
    return (
        <Container>
            <Box sx={{
                textAlign :'center',margin :'40px 0'
            }}>
                <Box sx={{
                    textAlign : 'start'
                }}>
                    <Typography fontWeight={600} variant='h4' >Explore Treatment Across Specialist</Typography>
                    <Typography fontWeight={300}component='p' >Experienced Doctors Across All Specialists</Typography>

                </Box>
                <Stack direction="row" gap={5} mt={5} >
                {
                    specialist.map((specialty : any )=> (
                        <Box key={specialty.id}  px={1} py={2}   sx={{
                            width:'150px',
                            flex : 1,
                            backgroundColor:"rgba(245,245,245,1)",
                            border : "1px solid rgba(250,250,250,1)",
                            borderRadius : "10px",
                            "& img":{
                                width : "50px",
                                height: "50px",
                                margin : "0 auto"
                            },
                            "&:hover" :{
                                border: "1px solid blue"
                            }
                        }} >
                           
                            <Image src={specialty.icon} height={100} width={100} alt="icon" />
                            <Box>
                                <Typography>{specialty.title}</Typography>
                            </Box>
                        </Box>
                    ))
                }
                </Stack>
                
                <Button variant="outlined" sx={{marginTop : "20px"}} >View All</Button>
            </Box>
        </Container>
    );
};

export default Specialist;