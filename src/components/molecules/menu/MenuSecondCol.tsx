import { Typography } from "@mui/material";
import Icons from "../../atoms/icons/Icons";

function MenuSecondCol() {
  return (
    <>
      <li>
        <Icons name="politics" />
        <Typography variant="body2"> Politics</Typography>
      </li>
      <li>
        <Icons name="healthAndNutrition" />
        <Typography variant="body2"> Health and Nutrition</Typography>
      </li>
      <li>
        <Icons name="history" />
        <Typography variant="body2"> History</Typography>
      </li>
      <li>
        <Icons name="motivationAndInspiration" />
        <Typography variant="body2"> Motivation and Inspiration</Typography>
      </li>
      <li>
        <Icons name="productivity" />
        <Typography variant="body2"> Productivity</Typography>
      </li>
      <li>
        <Icons name="careerAndSuccess" />
        <Typography variant="body2"> Career and Success</Typography>
      </li>
    </>
  );
}

export default MenuSecondCol;
