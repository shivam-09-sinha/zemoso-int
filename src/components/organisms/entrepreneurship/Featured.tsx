import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import { bookDetailsType } from "../mylibrary/bookDetailsType";
import EntCardGrid from "./EntCardGrid";
const ContainerStyled = styled(Container)`
  margin: 3rem 0;
`;

type featuredProps = {
  booksNeeded?: bookDetailsType[];
  addNewBookToLibrary?: any;
};
function Featured({ booksNeeded, addNewBookToLibrary }: featuredProps) {
  return (
    <ContainerStyled>
      <Typography variant="subtitle2">Featured audio blinks</Typography>
      <EntCardGrid
        books={booksNeeded}
        addNewBookToLibrary={addNewBookToLibrary}
      />
    </ContainerStyled>
  );
}

export default Featured;
