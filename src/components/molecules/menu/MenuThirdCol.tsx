import { Typography } from "@mui/material";
import Icons from "../../atoms/icons/Icons";

function MenuThirdCol() {
    return (
      <>
        <li>
          <Icons name="marketingAndSales" />
          <Typography variant="body2">Marketing And Sales</Typography>
        </li>
        <li>
          <Icons name="personalDevelopment" />
          <Typography variant="body2">Personal Development</Typography>
        </li>
        <li>
          <Icons name="communicationSkills" />
          <Typography variant="body2">Communication Skills</Typography>
        </li>
        <li>
          <Icons name="moneyAndInvestments" />
          <Typography variant="body2">Money And Investments </Typography>
        </li>
        <li>
          <Icons name="sexAndRelationship" />
          <Typography variant="body2">Sex And Relationship </Typography>
        </li>
        <li>
          <Icons name="education" />
          <Typography variant="body2">Education </Typography>
        </li>
      </>
    );
}

export default MenuThirdCol;