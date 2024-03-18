import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import facebook from '@/assets/landing_page/facebook.png'
import twitter from '@/assets/landing_page/twitter.png'
import instagram from '@/assets/landing_page/instagram.png'
const FooterPage = () => {
    return (
        <Box bgcolor="rgb(17,26,34)" py={5} >
            <Container >
                <Stack direction="row" gap={2} justifyContent="center">
                    <Typography component={Link} href="/" color='#fff'>Consultation</Typography>
                    <Typography component={Link} href="/login" color='#fff' >Health Plans</Typography>
                    <Typography component={Link} href="/login" color='#fff' >Medicine</Typography>
                    <Typography component={Link} href="/login" color='#fff' >Diagnostics</Typography>
                    <Typography component={Link} href="/login" color='#fff' >NGOs</Typography>
                </Stack>
                <Stack direction="row" gap={2} justifyContent="center" py={3}>
                    <Image src={facebook} width={30} height={30} alt='facebook' />
                    <Image src={twitter} width={30} height={30} alt='facebook' />
                    <Image src={instagram} width={30} height={30} alt='facebook' />
                </Stack>
                <div className='border-b-[1px] border-dashed '></div>
                <Stack direction="row" gap={2} justifyContent="space-between" alignItems="center" py={3}>
                    <Typography component="p" color='#fff'>&copy; All rights reserved</Typography>
                    <Typography variant="h4" color='#fff' component={Link} href="/" fontWeight={600} >
                        P<Box component="span" color="primary.main">H</Box> Health Care
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default FooterPage;