import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import { bookDetailsType } from "../mylibrary/bookDetailsType";
import EntCardGrid from "./EntCardGrid";
const ContainerStyled = styled(Container)`
  margin: 2rem 0;
`;

type justAddedProps = {
  booksNeeded?: bookDetailsType[];
  addNewBookToLibrary?: any;
};

function JustAdded({ booksNeeded, addNewBookToLibrary }: justAddedProps) {
  return (
    <ContainerStyled>
      <Typography variant="subtitle2">Just Added</Typography>
      <EntCardGrid
        books={booksNeeded}
        addNewBookToLibrary={addNewBookToLibrary}
      />
    </ContainerStyled>
  );
}

export default JustAdded;
