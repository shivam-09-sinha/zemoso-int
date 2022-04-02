import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Card from "../../molecules/card/Card";
import { bookDetailsType } from "../mylibrary/bookDetailsType";
type entCardProps = {
  books?: bookDetailsType[];
  addNewBookToLibrary: any;
};

const GridStyled = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  gap: 1rem;
`;

function EntCardGrid({
  books,
  addNewBookToLibrary,
}: entCardProps): JSX.Element {
  return (
    <GridStyled>
      {books?.map((ele) => {
        return (
          <Card
            coverImage={ele.coverImage}
            title={ele.title}
            author={ele.author}
            timeToRead={ele.timeToRead}
            key={ele.coverImage}
            noOfReads={ele.noOfReads}
            finishedReading={ele.finishedReading}
            addToLibrary={addNewBookToLibrary}
          />
        );
      })}
    </GridStyled>
  );
}

export default EntCardGrid;
