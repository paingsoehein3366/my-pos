import { Box, Drawer, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import ClearIcon from '@mui/icons-material/Clear';

interface Prop {
      open: boolean,
      setOpen: () => void
}

const DrawMenus = ({ open, setOpen }: Prop) => {
      const style = {
            width: "150px",
            color: "#fff"
      }
      return (
            <Drawer open={open} onClose={setOpen}>
                  <Box sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#0b9d58",
                        pl: 3,
                        pt: 2,
                        height: "100vh"
                  }}>
                        <Box sx={{ bgcolor: "", width: "100%", mb: 2 }}>
                              <ClearIcon
                                    sx={{
                                          fontSize: 30,
                                          bgcolor: "gray",
                                          borderRadius: 5,
                                          opacity: 0.8,
                                          color: "#fff",
                                          p: "2px",
                                          cursor: "pointer",
                                          "&&:hover": { opacity: 0.5 },
                                          "&&:active": { opacity: 1 },
                                    }}
                                    onClick={setOpen}
                              />
                        </Box>

                        <Link to={"/"} className="MenuList" onClick={setOpen}>
                              <HomeIcon color="disabled" />
                              <Typography style={style}>Home</Typography>
                        </Link>
                        <Link to={"/menus"} className="MenuList" onClick={setOpen}>
                              <RestaurantMenuIcon color="disabled" />
                              <Typography style={style}>Menus</Typography>
                        </Link>
                        <Link to={"/menu-categories"} className="MenuList" onClick={setOpen}>
                              <CategoryIcon color="disabled" />
                              <Typography style={style}>Categories</Typography>
                        </Link>

                  </Box>
            </Drawer>
      )
};
export default DrawMenus;