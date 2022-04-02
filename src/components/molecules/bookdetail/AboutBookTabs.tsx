import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const GridStyled = styled(Grid)`
  border-bottom: 2px solid #e1ecfc;
  display: flex;
  gap: 1.3rem;
  cursor: default;
  margin-bottom: 1rem;
  & .active {
    border-bottom: 2px solid #2ce080;
    padding-bottom: 1rem;
    border-collapse: collapse;
  }
  & .idle {
    padding-bottom: 1rem;
    :hover {
      cursor: pointer;
    }
  }
`;
type aboutBookTabProps = {
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeTab: string;
};

function AboutBookTabs({
  setActiveTab,
  activeTab,
}: aboutBookTabProps): JSX.Element {
  const toggleTab = (event: React.MouseEvent<HTMLDivElement>) => {
    setActiveTab((event.target as Element).id);
  };
  return (
    <GridStyled>
      <Grid
        item
        md={3}
        className={activeTab === "synopsis" ? "active" : "idle"}
        onClick={toggleTab}
        id="synopsis"
      >
        Synopsis
      </Grid>
      <Grid
        item
        md={3}
        className={activeTab === "whom" ? "active" : "idle"}
        id="whom"
        onClick={toggleTab}
      >
        Who is it for?
      </Grid>
      <Grid
        item
        md={3}
        className={activeTab === "aboutAuthor" ? "active" : "idle"}
        id="aboutAuthor"
        onClick={toggleTab}
      >
        About the author
      </Grid>
    </GridStyled>
  );
}

export default AboutBookTabs;
