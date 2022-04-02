import { CSSProperties } from "react";
import Avatar from "../atoms/Avatar";
import Icons from "../atoms/icons/Icons";

const avatarDropStyles: CSSProperties = {
  display: "flex",
  alignContent: "center",
};

function AvatarWithDropDown() {
  return (
    <span style={avatarDropStyles}>
      <Avatar />
      <span style={{ alignSelf: "center" }}>
        <Icons name="downArrow" />
      </span>
    </span>
  );
}

export default AvatarWithDropDown;
