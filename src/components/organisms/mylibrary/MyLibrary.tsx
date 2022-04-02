import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import ToggleTabs from "../../molecules/tabs/ToggleTabs";
import MyLibraryCardGrid from "./MyLibraryCardGrid";
import { useEffect, useState } from "react";
import { bookDetailsType } from "./bookDetailsType";
import bookDetails from "../maincontent/BookDetails";
const MyLibraryBox = styled(Box)`
  margin: 0 15%;
  & .cards {
    display: flex;
    gap: 1rem;
    justify-content: left;
    flex-wrap: wrap;
    padding: 0 2rem;
    padding-top: 1rem;
  }
`;
function MyLibrary() {
  const [booksStatus, setBookStatus] = useState<bookDetailsType[]>();
  useEffect(() => {
     sessionStorage.setItem("books",JSON.stringify(bookDetails));
    if (sessionStorage.getItem("books") !== null) {
      const books: bookDetailsType[] = JSON.parse(
        sessionStorage.getItem("books") || "{}"
      );
      if (books[0].title !== undefined) {
        setBookStatus(books);
      }
    }
  }, []);

  const [currentTab, setTab] = useState("current");
  const toggleRead = (event: any) => {
    const updatedBookId = event.target.id;
    const updatedBooksStatus = booksStatus?.map((ele) =>
      ele.coverImage === updatedBookId
        ? { ...ele, finishedReading: !ele.finishedReading }
        : ele
    );
    setBookStatus(updatedBooksStatus);
  };

  const toggleTab = (event: any) => {
    console.log(event.target.id);
    const tabNeeded = event.target.id;
    setTab(tabNeeded);
  };

  const getTab = () => {
    if (currentTab === "current") {
      return false;
    } else return true;
  };
  return (
    <MyLibraryBox>
      <Typography variant="heading" color="TEXT.HIGH_EMPHASIS">
        My Library
      </Typography>
      <ToggleTabs toggleTab={toggleTab} focus={currentTab} />
      <Grid className="cards">
        <MyLibraryCardGrid
          status={booksStatus?.filter(
            (ele) => ele.finishedReading === getTab()
          )}
          toggle={toggleRead}
        />
      </Grid>
    </MyLibraryBox>
  );
}

export default MyLibrary;