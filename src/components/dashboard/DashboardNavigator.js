import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';

const categories = [

 
  {
    id: 'Admin',
    children: [
      {
        id: 'Manage Restaurants ',
        icon: <LocalLibraryIcon />, 
        route:'manage_restaurants'
      },
      {
        id: 'Manage Foods',
        icon: <LocalLibraryIcon />, 
        route:'manage_products'
      },
      { id: 'Contact',
      icon: <DnsRoundedIcon /> , route:'manage_contact' },
     
       
      
    ],
  },  
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function DashboardNavigator(props) {
  const { ...other } = props;

  const location = useLocation() 
  let uri = location?.pathname
  console.log(uri)


  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          Food App
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ background: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, route }) => (
              <ListItem disablePadding key={childId}>
                <Link className='linkDashboard' to={`${route}`}>
                <ListItemButton selected={uri === `/dashboard/${route}`? true : false} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
                </Link>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}