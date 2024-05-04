import { Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import CreateMenus from "./CreateMenu";
import AddIcon from '@mui/icons-material/Add';
import MenuCard from "./MenuCard";
import NavBar from "../NavBar";
import CategoryList from "../CategoryList";
import { Link } from "react-router-dom";

const Menus = () => {
      const [open, setOpen] = useState(false);
      return (
            <>
                  <NavBar title="Menus" />
                  <Box sx={{}}>
                        <Box sx={{ display: "flex", justifyContent: "end", m: 3 }}>
                              <Button
                                    variant="contained"
                                    onClick={() => setOpen(true)}
                                    color="success"
                              ><AddIcon sx={{ fontSize: 20, mr: 1 }} /> create menus</Button>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", ml: { xs: 0, md: 15 } }}>
                              <MenuCard count={open} />
                        </Box>
                  </Box>
                  <CreateMenus open={open} setOpen={() => setOpen(false)} />
            </>
      )
}
export default Menus;