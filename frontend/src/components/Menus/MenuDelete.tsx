import { Box, Button, Dialog, DialogTitle } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetcher } from "../../lib/axios";
import Loading from "../Loading";

interface Prop {
      open: boolean,
      setOpen: () => void,
      id: string
}

const MenuDelete = ({ open, setOpen, id }: Prop) => {
      console.log("ID: ", id);
      const navigate = useNavigate();
      const [openLoading, setOpenLoading] = useState(false);

      const removeFunction = async () => {
            setOpenLoading(true)
            await fetcher.delete(`/menus/remove/${id}`)
                  .then(res => res.data)
                  .catch(err => console.log("Error: ", err));
            navigate('/menus')
            setOpenLoading(false);
      }
      return (
            <Dialog open={open} onClose={setOpen}>
                  <DialogTitle >Are you sure this menu remove?</DialogTitle>
                  <Box sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}>
                        <Button variant="outlined" onClick={setOpen}>cencel</Button>
                        <Button variant="contained" color="error" onClick={removeFunction}>remove</Button>
                  </Box>
                  <Loading open={openLoading} setOpen={() => setOpenLoading(false)} />
            </Dialog>
      )
};
export default MenuDelete;