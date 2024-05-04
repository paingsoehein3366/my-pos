import { Box, Button, TextareaAutosize, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { fetcher } from "../../lib/axios";
import Loading from "../Loading";
import MenuDelete from "./MenuDelete";
import NavBar from "../NavBar";

interface menus {
      name: string,
      category: "",
      price: "",
      image: "",
      _id: "",
      description: ""
}

const EditMenu = () => {
      const param = useParams();
      const navigate = useNavigate()
      const [data, setData] = useState<menus[]>();
      const [updateData, setUpdateData] = useState({});
      const [open, setOpen] = useState(false);
      const [check, setCheck] = useState();
      const [menuDraw, setMenuDraw] = useState(false);
      const [openLoading, setOpenLoading] = useState(false);

      useEffect(() => {
            getMenus();
      }, [param]);
      const getMenus = async () => {
            setOpenLoading(true);
            await fetcher.get('/menus')
                  .then(res => setData(res.data.data))
                  .catch(err => console.log("Error", err))
            setOpenLoading(false);
      }
      const filter = data?.filter(item => item._id === param.id);
      const updateFunction = async () => {
            setOpenLoading(true);
            await fetcher.patch(`/menus/update/${param.id}`, { updateData })
                  .then(res => (res.data.data))
                  .catch(err => console.log("menu update error:", err))
            navigate('/menus')
            setOpenLoading(false);
      }
      return (
            <Box>
                  <NavBar title="Menu Edit" />
                  <Box sx={{ display: "flex", justifyContent: "end", mt: 2, mr: 4 }}>
                        <Button variant="outlined" onClick={() => navigate('/menus')}>back</Button>
                  </Box>
                  {filter?.map(item => {
                        return (
                              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                          <img style={{ width: "300px", borderRadius: "10px", marginBottom: "3rem" }} src={`./../../public/${item.image}`} alt="" />
                                          <TextField
                                                label="name"
                                                type="text"
                                                defaultValue={item.name}
                                                onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
                                          />
                                          <TextField
                                                label="category"
                                                type="text"
                                                defaultValue={item.category}
                                                onChange={(e) => setUpdateData({ ...updateData, category: e.target.value })}
                                                sx={{ marginY: 2 }}
                                          />
                                          <TextField
                                                label="price"
                                                type="text"
                                                defaultValue={item.price}
                                                onChange={(e) => setUpdateData({ ...updateData, price: e.target.value })}
                                          />
                                          <TextareaAutosize
                                                defaultValue={item.description}
                                                onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })}
                                                style={{
                                                      marginTop: "15px",
                                                      height: "60px",
                                                      padding: "10px",
                                                }}
                                          />
                                    </Box>
                                    <Box sx={{ display: "flex", width: 300, justifyContent: "space-between", mt: 3 }}>
                                          <Button variant="contained" color="error" onClick={() => setOpen(true)}>remove</Button>
                                          <Button variant="contained" onClick={updateFunction}>update</Button>
                                    </Box>
                              </Box>
                        )
                  })}
                  <MenuDelete open={open} setOpen={() => setOpen(false)} id={param.id as string} />
                  <Loading open={openLoading} setOpen={() => setOpenLoading(false)} />
            </Box>
      )
};
export default EditMenu;