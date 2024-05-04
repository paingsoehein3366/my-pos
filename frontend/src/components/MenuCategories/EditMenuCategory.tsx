import { Box, Button, TextField, Typography } from "@mui/material";
import NavBar from "../NavBar";
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from "react-router-dom";

const EditMenuCategory = () => {
      const param = useParams();
      return (
            <>
                  <Box>
                        <NavBar title="Edti Menu Categories" />
                        <Box>
                              <Box sx={{ display: "flex", justifyContent: "end" }}>
                                    <Button variant="contained" color="error" sx={{ mt: 3, mr: 3 }}
                                          onClick={() => {

                                          }}
                                          startIcon={<DeleteIcon />}
                                    >Delete</Button>
                              </Box>
                              <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                              }}>
                                    <TextField defaultValue={""} sx={{ mb: 5 }} onChange={(evt) => { }} />
                                    <Button sx={{ mb: 5, mt: 4 }} variant="contained" >Update</Button>
                              </Box>
                              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <Box sx={{ width: 550, height: 2, background: "gray" }}></Box>
                                    <Typography sx={{ my: 3 }} variant="h4">Menus</Typography>
                                    <Button sx={{ mb: 4, mt: 2 }} variant="contained">Add</Button>
                              </Box>
                        </Box>
                  </Box>
            </>
      )
};
export default EditMenuCategory;