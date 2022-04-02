import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import { bookDetailsType } from "../mylibrary/bookDetailsType";
import EntCardGrid from "./EntCardGrid";
const ContainerStyled = styled(Container)`
  margin: 2rem 0;
`;

type trendingBlinksProps = {
  booksNeeded?: bookDetailsType[];
  addNewBookToLibrary?: any;
};

function TrendingBlinks({
  booksNeeded,
  addNewBookToLibrary,
}: trendingBlinksProps) {
  return (
    <ContainerStyled>
      <Typography variant="subtitle2">Trending blinks</Typography>
      <EntCardGrid books={booksNeeded}  addNewBookToLibrary={addNewBookToLibrary}/>
    </ContainerStyled>
  );
}

export default TrendingBlinks;
