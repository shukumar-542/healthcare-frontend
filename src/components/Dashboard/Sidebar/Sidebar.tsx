import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Image from "next/image";
import assets from '@/assets'
import Link from "next/link";
const Sidebar = () => {
    const drawer = (
        <div>
          
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      );
    return (
        <Box>
            <Stack sx={{py: 1 }} direction='row' gap={1} component={Link} href='/' justifyContent='center' alignItems='center' >
                <Image width={40} height={40} src={assets.svgs.logo} alt="logo"/>
                <Typography variant='h6' component='h1'>
                    PH Health Care
                </Typography>
            </Stack>
           {drawer} 
        </Box>
    );
};

export default Sidebar;
