import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { DrawerItems } from '@/types';
import { usePathname } from 'next/navigation';


type ItemProps = {
    item : DrawerItems,
}

const SidebarItems = ({item} : ItemProps) => {
    const linkPath = `/dashboard/${item.path}`
    const pathname = usePathname()
    return (
        <Link href={linkPath} >
            <ListItem  disablePadding sx={{
                ...(pathname === linkPath  ? {borderRight :"3px solid #1586FD", "& svg": {
                    color : '#1586FD'
                }} : {}),
                mb :1,

            }}>
                <ListItemButton>
                    <ListItemIcon>
                        {
                            item.icon && <item.icon/>
                        }
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            </ListItem>
        </Link>
    );
};

export default SidebarItems;