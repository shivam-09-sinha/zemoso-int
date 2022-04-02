import { Button, Typography } from "@mui/material";
import Icons from "../../atoms/icons/Icons";

function ButtonGrid() {
  return (
    <>
      <Button variant="outlined">
        <Typography variant="body1">Read now</Typography>
      </Button>
      <Button variant="outlined">
        <Typography variant="body1"> Finished Reading</Typography>
      </Button>

      <Typography variant="body1" color="#6D787E" className="send">
        Send to Kindle
        <Icons name="arrowRight" />
      </Typography>
    </>
  );
}

export default ButtonGrid;
