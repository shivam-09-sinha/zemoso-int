import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import CoverImage from "../../atoms/cover_image/CoverImage";
import Icons from "../../atoms/icons/Icons";
import { bookDetailsType } from "../../organisms/mylibrary/bookDetailsType";
import ButtonGrid from "./ButtonGrid";

const text_low = "#6D787E";
const GridStyled = styled(Grid)`
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  & .content {
    display: flex;
    flex-direction: column;
  }
  & .subtitle3 {
    margin: 1.5rem 0;
  }
  & .time {
    margin: 1rem 0;
    display: flex;
    color: #6d787e;
  }
  & .buttons {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 2rem;
    & button {
      padding: 0.7rem 2rem;
      color: #22c870;
      border: 1px solid #042330;
      border-radius: 5px;
      text-transform: none;
      :hover {
        color: #042330;
        background-color: #2ce080;
      }
    }
    & .send {
      display: flex;
      align-items: center;
      gap: 3px;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
function AboutBook({ book }: { book ?: bookDetailsType }) {
  return (
    <GridStyled>
      <Grid className="content">
        <Typography variant="heading"> {book?.title}</Typography>
        <Typography variant="subtitle3" className="subtitle3">
          Turning Your Business into an Enduring Great Company
        </Typography>
        <Typography variant="body2" color={text_low}>
          By {book?.author}
        </Typography>
        <Grid className="time">
          <Icons name="time" />
          <Typography variant="caption2">{book?.timeToRead}</Typography>
        </Grid>
        <Grid className="buttons">
          <ButtonGrid />
        </Grid>
      </Grid>
      <Grid className="image">
        <CoverImage name={book?.coverImage} />
      </Grid>
    </GridStyled>
  );
}

export default AboutBook;
