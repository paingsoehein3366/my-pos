import { Button, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import CreateMenus from "../Menus/CreateMenu";
import AddIcon from '@mui/icons-material/Add';
import MenuCard from "../Menus/MenuCard";
import NavBar from "../NavBar";
import CategoryList from "../CategoryList";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { fetcher } from "../../lib/axios";

const MenuCategory = () => {
      const [open, setOpen] = useState(false);
      const [openLoading, setOpenLoading] = useState(false);
      const [data, setData] = useState([{ _id: "", category: "" }]);
      console.log("data: ", data);

      useEffect(() => {
            getCategory();
      }, []);
      const getCategory = async () => {
            setOpenLoading(true);
            await fetcher.get('/menus')
                  .then(res => setData(res.data.data))
                  .catch(err => console.log("get category error", err));
            setOpenLoading(false);
      }
      return (
            <>
                  <NavBar title="Categories" />
                  <Box sx={{ display: "flex" }}>
                        <CategoryList />
                        <Box sx={{ width: "87%" }}>
                              <Box sx={{ display: "flex", justifyContent: "end", m: 3 }}>
                                    <Button
                                          variant="contained"
                                          onClick={() => setOpen(true)}
                                          color="success"
                                    ><AddIcon sx={{ fontSize: 20, mr: 1 }} /> create MenuCategory</Button>
                              </Box>
                              <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    {data?.map(item => {
                                          return (
                                                <Link
                                                      to={`${item._id}`}
                                                      key={item._id}
                                                      style={{ textDecoration: "none" }}
                                                >
                                                      <Box
                                                            sx={{
                                                                  display: "flex",
                                                                  flexDirection: "column",
                                                                  mr: 3,
                                                                  maxWidth: "200px",
                                                                  alignItems: "center",
                                                                  p: 2,
                                                                  position: "relative",
                                                                  width: "170px",
                                                                  height: "170px",
                                                                  borderRadius: 2,
                                                                  border: "2px solid #EBEBEB",
                                                                  justifyContent: "center",
                                                                  cursor: "pointer",
                                                                  textAlign: "center",
                                                                  textDecoration: "none",
                                                            }}
                                                      >
                                                            <Typography variant="h5">{item.category}</Typography>
                                                      </Box>
                                                </Link>
                                          )
                                    })}
                              </Box>
                        </Box>
                  </Box>
                  <CreateMenus open={open} setOpen={() => setOpen(false)} />
                  <Loading open={openLoading} setOpen={() => setOpenLoading(false)} />
            </>
      )
}
export default MenuCategory;