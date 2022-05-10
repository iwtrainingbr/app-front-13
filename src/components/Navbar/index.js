import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Person from '@mui/icons-material/Person';
import Switch from '@mui/material/Switch';

import {
  Home, Schedule, Group
} from '@mui/icons-material';

import {
  Drawer, Menu, MenuItem, FormGroup, FormControlLabel,
  List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';

import './css/link.css'


export default function Navbar() {
  const [menuUser, setMenuUser] = React.useState(false);
  const [menuSidebar, setMenuSidebar] = React.useState(false);

  const handleOpenCloseSidebar = () => {
    setMenuSidebar(!menuSidebar);
  }

  const handleOpenClose = () => {
    setMenuUser(!menuUser);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer
        anchor={"left"}
        open={menuSidebar}
        onClose={handleOpenCloseSidebar}
      >
        <List>
          <ListItem button>
            <ListItemIcon><Home/></ListItemIcon>
            <ListItemText>Inicio</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon><Group/></ListItemIcon>
            <ListItemText>Coaches</ListItemText>
          </ListItem>
          <Link to="/novo-coach">
          <ListItem button onClick={handleOpenCloseSidebar}>
            <ListItemIcon><Person/></ListItemIcon>
            <ListItemText>Novo Coach</ListItemText>
          </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon><Schedule/></ListItemIcon>
            <ListItemText>Horários</ListItemText>
          </ListItem>
        </List>
      </Drawer>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            data-cy="menu"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenCloseSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CrossBox
          </Typography>

            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenClose}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={menuUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(menuUser)}
                onClose={handleOpenClose}
              >
                <MenuItem onClick={handleOpenClose}><Link to="/perfil">Meu Perfil</Link> </MenuItem>
                <MenuItem onClick={handleOpenClose}><Link to="/login">Sair</Link></MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
