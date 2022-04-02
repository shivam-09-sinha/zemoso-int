import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import theme from "../../../Theme";

const GridTabs = styled(Grid)`
  display: flex;
  margin-top: 2rem;
  border-bottom: 2px solid #e1ecfc;
  cursor: default;
  & #current,
  #finished {

    
    padding-bottom: 1rem;
  }
 / & .focus {
    border-bottom: 2px solid #2ce080;
    border-collapse: collapse;
    color: #2ce080;
  }
  & .idle {
    :hover {
      border-bottom: 2px solid #2ce080;
      color: #2ce080;
      border-collapse: collapse;
    }
  }
  ${theme.breakpoints.down("sm")} {
    flex-direction: column;
    border-bottom: none;
    & #current,
    #finished {
      margin-bottom: 1rem;
    }
  }
`;

function ToggleTabs(props: any) {
  return (
    <GridTabs data-testid="toggleTabs">
      <Grid xs={4} item={true}>
        <Typography
          color="ALPHA.PRIMARY_500"
          variant="subtitle2"
          className={props.focus === "current" ? "focus" : "idle"}
          id="current"
          onClick={props.toggleTab}
        >
          Currently reading
        </Typography>
      </Grid>
      <Grid xs={4} item={true}>
        <Typography
          variant="subtitle2"
          id="finished"
          onClick={props.toggleTab}
          className={props.focus === "finished" ? "focus" : "idle"}
        >
          Finished
        </Typography>
      </Grid>
    </GridTabs>
  );
}

export default ToggleTabs;
