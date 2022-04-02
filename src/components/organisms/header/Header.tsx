import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Icons from "../../atoms/icons/Icons";
import Logo from "../../atoms/Logo";
import AvatarWithDropDown from "../../molecules/AvatarWithDropDown";
import ExtendedNav from "./ExtendedNav";
import { openMenu } from "./openMenu";
import { Link } from "react-router-dom";
// styling for the nav list
const PRIMARY_500 = "#22C870";

const DivHeader = styled.div`
  & ul {
    padding: 0 15%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    cursor: default;
    & :nth-of-type(5) {
      margin-left: auto;
    }
    & :nth-of-type(3) {
      border-bottom: 1px solid transparent;
      display: flex;
      align-items: center;
      user-select: none;
      cursor: pointer;
    }
    & :nth-of-type(3):hover {
      border-bottom: 1px solid ${PRIMARY_500};
    }
    @media screen and (max-width: 450px) {
      flex-wrap: wrap;
    }
  }
`;

function Header() {
  return (
    <div className="header" data-testid="header">
      <DivHeader className="header-nav">
        <ul>
          <li>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li>
            <Icons name="search" />
          </li>
          <li onClick={openMenu} id="menu">
            <Typography variant="body1" color="TEXT.HIGH_EMPHASIS">
              Explore
            </Typography>
            <span id="down">
              <Icons name="downArrow" />
            </span>
            <span id="up" style={{ display: "none" }}>
              <Icons name="upArrow" />
            </span>
          </li>
          <li>
            <Link to="/" className="link">
              <Typography variant="body1" color="TEXT.HIGH_EMPHASIS">
                My library
              </Typography>
            </Link>
          </li>
          <li>
            <AvatarWithDropDown />
          </li>
        </ul>
      </DivHeader>

      <ExtendedNav />
    </div>
  );
}

export default Header;
