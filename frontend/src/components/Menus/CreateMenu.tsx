import { Box, Button, Dialog, DialogContent, DialogTitle, TextareaAutosize, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { fetcher } from "../../lib/axios";
import Loading from "../Loading";

interface Prop {
      open: boolean,
      setOpen: () => void
}

const CreateMenus = ({ open, setOpen }: Prop) => {
      const [data, setData] = useState({
            name: "",
            category: "",
            price: "",
            description: ""
      });
      const [selectedFile, setSelectedFile] = useState<File | null>(null);
      const [openLoading, setOpenLoading] = useState(false);

      const createMenuFunction = async () => {
            if (!data.name) {
                  return alert("Enter name");
            } else if (!data.category) {
                  return alert("Enter category")
            } else if (!data.price) {
                  return alert("Enter price")
            };
            // file upload
            if (selectedFile) {
                  setOpenLoading(true);
                  const formData = new FormData();
                  formData.append('file', selectedFile)
                  console.log('Selected file:', formData);
                  let responseId = { _id: "" };
                  await fetcher.post('/upload', formData)
                        .then(res => responseId = res.data.data)
                        .catch(err => err.message)
                  // set data
                  await fetcher.patch(`/menus/update/${responseId._id}`, { updateData: data })
                        .then(res => console.log("response: ", res.data))
                        .catch(err => console.log("menu update error:", err))

                  setData({ ...data, name: "", category: "", price: "", description: "" });
                  setOpen();
                  setOpenLoading(false);
            } else {
                  setOpenLoading(false);
                  console.error('No file selected');
            }
      };
      const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
            const files = event.target.files;
            if (files && files.length > 0) {
                  setSelectedFile(files[0]);
            }
      };


      return (
            <Dialog open={open} onClose={setOpen}>
                  <DialogTitle sx={{ display: "flex", justifyContent: "center", mb: 2 }}>Create Menu</DialogTitle>
                  <DialogContent sx={{ display: "flex", flexDirection: "column", paddingX: 7 }}>
                        <input style={{ width: 300, marginBottom: 10 }} type="file" onChange={handleFileChange} />
                        <TextField
                              value={data.name}
                              onChange={(e) => setData({ ...data, name: e.target.value })}
                              placeholder="Enter name"
                              label="Enter name"
                        />
                        <TextField
                              value={data.category}
                              onChange={(e) => setData({ ...data, category: e.target.value })}
                              placeholder="Enter category"
                              label="Enter category"
                              sx={{ marginY: 2 }}
                        />
                        <TextField
                              value={data.price}
                              onChange={(e) => setData({ ...data, price: e.target.value })}
                              type="number"
                              placeholder="Enter price"
                              label="Enter price"
                        />
                        <TextareaAutosize
                              style={{
                                    marginTop: "15px",
                                    height: "60px",
                                    padding: "10px"
                              }}
                              placeholder="Enter description..."
                              value={data.description}
                              onChange={(e) => setData({ ...data, description: e.target.value })}
                        />
                        <Box sx={{ marginY: 3, display: "flex", justifyContent: "center" }}>
                              <Button variant="contained" color="success" onClick={createMenuFunction}>Create Menu</Button>
                        </Box>
                  </DialogContent>
                  <Loading open={openLoading} setOpen={() => setOpenLoading(false)} />
            </Dialog>
      )
};
export default CreateMenus;