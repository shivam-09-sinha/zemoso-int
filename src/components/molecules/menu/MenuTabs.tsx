import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import theme from "../../../Theme";

const hoverColor = "#116BE9"
const DivMenuTabs = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  padding: 1.5rem 0;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: default;
`;

function MenuTabs() {
  return (
    <DivMenuTabs data-testid="menu">
      <Typography variant="body1" color="TEXT.BLUE">
        Explore by category
      </Typography>
      <Typography variant="subtitle3" color="TEXT.MEDIUM_EMPHASIS">
        See recently added titles
      </Typography>
      <Typography variant="subtitle3" color="TEXT.MEDIUM_EMPHASIS">
        See popular titles
      </Typography>
    </DivMenuTabs>
  );
}

export default MenuTabs;
