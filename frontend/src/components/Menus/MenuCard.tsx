import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetcher } from "../../lib/axios";
import Loading from "../Loading";

interface Prop {
      count: boolean;
}

const MenuCard = ({ count }: Prop) => {
      const [datas, setData] = useState([{ name: "", category: "", price: "", image: "", _id: 0, description: "" }]);
      const [open, setOpen] = useState(false);
      useEffect(() => {
            getMenus();
      }, [count]);
      const getMenus = async () => {
            setOpen(true);
            fetcher.get('/menus')
                  .then(res => setData(res.data.data))
                  .catch(err => console.log("Error", err));
            setOpen(false);
      }
      return (
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  {datas?.map(item => {
                        return (
                              <Link style={{ textDecoration: "none" }} to={`${item._id}`}>
                                    <Card key={item._id} sx={{ width: 320, m: 2, height: 350 }}>
                                          <CardMedia
                                                sx={{ height: 200 }}
                                                image={`./../../public/${item.image}`}
                                                title="green iguana"
                                          />
                                          <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                      {item.name}
                                                </Typography>
                                                <Typography color="text.secondary" component="p">
                                                      {item.description}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                      ¥{item.price}
                                                </Typography>
                                          </CardContent>
                                    </Card>
                              </Link>
                        )
                  })}
                  <Loading open={open} setOpen={() => setOpen(false)} />
            </Box>

      )
};
export default MenuCard;