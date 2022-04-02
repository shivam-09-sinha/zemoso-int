import { Button, Grid, Typography } from "@mui/material";
import BannerImage from "../../atoms/BannerImage";
import theme from "../../../Theme";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

const GridStyled = styled(Grid)`
  font-family: "Cera Pro";
  background-color: #f1f6f4;
  display: flex;
  justify-content: space-around;
  padding: 4rem 2rem 1rem 2rem;
  &.text {
    
  }
  & .heading {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    margin-bottom: 1rem;
  }
  & .subtitle2 {
    color: #6d787e;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
  }
`;
function ExploreBanner() {
  return (
    <GridStyled data-testid="explorebanner">
      <Box className="text">
        <Grid item md={6} className="heading">
          <Typography variant="heading">
            Explore Books on entrepreneurship
          </Typography>
        </Grid>
        <Grid item md={8} className="subtitle2">
          <Typography variant="subtitle3">
            Everything you need to know about thriving on a shoestring budget,
            making your first million, and hiring right from the start.
          </Typography>
        </Grid>
      </Box>

      <Grid>
        <BannerImage />
      </Grid>
    </GridStyled>
  );
}

export default ExploreBanner;
