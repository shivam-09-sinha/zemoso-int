import { Typography } from "@mui/material";
import Icons from "../../atoms/icons/Icons";
import { Link } from "react-router-dom";
import { openMenu } from "../../organisms/header/openMenu";
function MenuFirstCol() {
  return (
    <>
      <li>
        <Link to="/entrepreneurship" onClick={openMenu} className="link">
          <Icons name="entrepreneurship" />
          <Typography variant="body2"> Entrepreneurship</Typography>
        </Link>
      </li>
      <li>
        <Icons name="science" />
        <Typography variant="body2"> science</Typography>
      </li>
      <li>
        <Icons name="economics" />
        <Typography variant="body2"> economics</Typography>
      </li>
      <li>
        <Icons name="corporateCulture" />
        <Typography variant="body2"> Corporate Culture</Typography>
      </li>
      <li>
        <Icons name="psychology" />
        <Typography variant="body2"> Psychology</Typography>
      </li>
      <li>
        <Icons name="natureAndEnvironment" />
        <Typography variant="body2"> Nature & Environment</Typography>
      </li>
    </>
  );
}

export default MenuFirstCol;
