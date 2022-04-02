import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../atoms/Logo";
import FirstCol from "../../molecules/footer/FirstCol";
import SecondCol from "../../molecules/footer/SecondCol";
import ThirdCol from "../../molecules/footer/ThirdCol";

const BoxStyled = styled(Box)`
  margin-top: 76px;
  padding: 38px 15%;
  background-color: #f1f6f4;
  overflow: auto;
  & .content {
    display: flex;
    justify-content: space-between;
  }
  & .footer-links {
    display: flex;
    flex-direction: column;
    gap: 1rem; 
  }
  & .about {
    margin-top: 2rem;
  }
`;

function Footer() {
  return (
    <BoxStyled data-testid="footer">
      <Grid container className="content">
        <Grid item md={4}>
          <Logo />
          <Typography variant="subtitle1" color="BETA.SECONDARY_500">
            Big ideas in small packages Start learning now
          </Typography>
        </Grid>
        <Grid item md={2} className="footer-links">
          <FirstCol />
        </Grid>
        <Grid item md={2} className="footer-links">
          <SecondCol />
        </Grid>
        <Grid item md={2} className="footer-links">
          <ThirdCol />
        </Grid>
      </Grid>
      <Grid className="about">
        <Typography variant="caption1" color="TEXT.MEDIUM_EMPHASIS">
          © Blinkist 2021 Sitemap &nbsp; | &nbsp; Imprint &nbsp;| &nbsp;Terms of
          Service &nbsp;| &nbsp; Privacy Policies
        </Typography>
      </Grid>
    </BoxStyled>
  );
}

export default Footer;
