import { Button, Grid, Typography } from "@mui/material";
import CoverImage from "../../atoms/cover_image/CoverImage";
import Icons from "../../atoms/icons/Icons";
import ProgressBar from "./CardBottom";
import { GridStyled } from "./GridStyled";
import { propsType } from "./propsType";
import { Link } from "react-router-dom";

function Card(props: propsType) {
  return (
    <GridStyled data-testid="card">
      <Link to={"/bookdetail/" + props.coverImage} className="link-to">
        <Grid className="img">
          <CoverImage name={props.coverImage} />
        </Grid>
        <Grid className="text">
          <Typography variant="subtitle1" fontWeight="700" fontSize="18px">
            {props.title}
          </Typography>
          <Typography color="#6D787E">{props.author}</Typography>
          <Grid>
            <Grid>
              <Grid className="time-and-no">
                <Grid className="time">
                  <Icons name="time" />
                  <Typography variant="caption2">{props.timeToRead}</Typography>
                </Grid>
                {props.noOfReads !== undefined ? (
                  <Grid className="noOfReads">
                    <Icons name="user" />
                    <Typography variant="caption2">
                      {props.noOfReads} reads
                    </Typography>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Link>

      {getCardBottom()}
    </GridStyled>
  );

  function getCardBottom(): JSX.Element | undefined {
    if (props.toggleReading !== undefined) {
      return (
        <>
          <Button
            onClick={props.toggleReading}
            id={props.coverImage}
            className="btn-toggle"
          >
            {props.finishedReading === true ? "Read Again" : "Finished Reading"}
          </Button>
          <ProgressBar />
        </>
      );
    } else if (props.addToLibrary !== undefined) {
      return (
        <Button
          className="btn-add"
          onClick={props.addToLibrary}
          id={props.coverImage}
        >
          <Icons name="add" />
          Add to Library
        </Button>
      );
    } else {
      return (
        <>
          <span className="more">
            <Icons name="more" className="more" />
          </span>
          <ProgressBar />
        </>
      );
    }
  }
}

export default Card;
