import { Box, List,  Stack, Typography } from "@mui/material";

import Image from "next/image";
import assets from '@/assets'
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItems from "./SidebarItems";
const Sidebar = () => {
  
  return (
    <Box>
      <Stack sx={{ py: 1 }} direction='row' gap={1} component={Link} href='/' justifyContent='center' alignItems='center' >
        <Image width={40} height={40} src={assets.svgs.logo} alt="logo" />
        <Typography variant='h6' component='h1'>
          PH Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems('admin' as UserRole).map((item, index) => (
          <SidebarItems item={item} index={index} key={index} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
