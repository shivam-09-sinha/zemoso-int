import { SvgIcon } from "@mui/material";
import { IconPropsType } from "./IconPropsType";
import pathOfIcons from "./PathOfSvgIcons";



function Icons(props: IconPropsType) {
  return <SvgIcon data-testid="icons" {...props}>{pathOfIcons[props.name]}</SvgIcon>;
}

export default Icons;
