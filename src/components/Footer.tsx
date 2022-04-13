import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import { NavLink, useLocation } from "react-router-dom";

import { navBarRoutes } from "../routes";

export default function FixedBottomNavigation() {
  const location = useLocation();

  return (
    <>
      {!['/login', '/register'].includes(location.pathname) && <Paper sx={{ zIndex: 1000, display: { sm: 'block', md: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={location.pathname}
        >
          {navBarRoutes.map((page) => (
            <BottomNavigationAction value={page.path} label={page.title} icon={page.icon && <page.icon />} component={NavLink} to={page.path} key={page.path} />
          ))}
        </BottomNavigation>
      </Paper>}
    </>);
}
