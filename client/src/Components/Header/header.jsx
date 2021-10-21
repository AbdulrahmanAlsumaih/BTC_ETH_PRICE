import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 } }>
            Bitcoin and Ethereum Dashboard Price
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
