import { Box, AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DrawMenus from "./DrawerMenus";
import { useState } from "react";


interface Prop {
      title: string,
}
const NavBar = ({ title }: Prop) => {
      const [open, setOpen] = useState(false);
      return (
            <Box>
                  <AppBar sx={{ backgroundColor: "#0b9d58" }} position="static">
                        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                              <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={() => setOpen(true)}
                              >
                                    <MenuIcon />
                              </IconButton>
                              <Typography variant="h6" component="div">{title}</Typography>
                              <Button color="inherit">Login</Button>
                        </Toolbar>
                  </AppBar>
                  <DrawMenus open={open} setOpen={() => setOpen(false)} />
            </Box>
      )
};
export default NavBar;