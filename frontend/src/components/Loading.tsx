import { Backdrop, Box, Dialog, Drawer } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

interface Prop {
      open: boolean,
      setOpen: () => void
}

const Loading = ({ open, setOpen }: Prop) => {
      return (
            <Backdrop open={open}>
                  <CircularProgress color="success" />
            </Backdrop>
      )
};
export default Loading;