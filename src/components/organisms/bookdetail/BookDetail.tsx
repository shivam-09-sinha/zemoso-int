import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutBook from "../../molecules/bookdetail/AboutBook";
import AboutBookTabs from "../../molecules/bookdetail/AboutBookTabs";
import { bookDetailsType } from "../mylibrary/bookDetailsType";

const GridStyled = styled(Grid)`
  padding: 0 15%;
  margin-top: 3rem;
`;
function BookDetail() {
  const [booksData, setBooksData] = useState<bookDetailsType[]>();
  const { bookid } = useParams();
  const [activeTab, setActiveTab] = useState("synopsis");
  useEffect(() => {
    window.scrollTo(0, 0);
    const books = "http://localhost:3000/books";
    const fetchData = async () => {
      try {
        const response = await fetch(books);
        const json = await response.json();
        setBooksData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const bookNeeded = booksData?.find((ele) => ele.coverImage === bookid);
  const getTabInfo = () => {
    switch (activeTab) {
      case "synopsis":
        return `${bookNeeded?.title} (2020) updates ${bookNeeded?.author}'s
        essential 1992 business handbook, Beyond Entrepreneurship for the
        entrepreneurs, visionaries, and innovators of today. This new edition
        combines the timeless business advice and strategy of the original text,
        supplemented with cutting-edge insights and case studies pertinent to
        today's business world.`;
      case "whom":
        return `Any one interested to know about stuff`;
      case "aboutAuthor":
        return `${bookNeeded?.author} is a great author in this field`;
      default:
        return `<></>`;
    }
  };
  return (
    <GridStyled>
      <Typography variant="body2">Get the key ideas from</Typography>
      <AboutBook book={bookNeeded} />
      <AboutBookTabs setActiveTab={setActiveTab} activeTab={activeTab} />
      <Grid item md={8}>
        {getTabInfo()}
      </Grid>
    </GridStyled>
  );
}

export default BookDetail;
