import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ExploreBanner from "../../molecules/entrepreneurship/ExploreBanner";
import TrendingBlinks from "./TrendingBlinks";
import { useEffect, useState } from "react";
import SearchBar from "../../molecules/SearchBar";
import { bookDetailsType } from "../mylibrary/bookDetailsType";
import JustAdded from "./JustAdded";
import Featured from "./Featured";
const BoxStyled = styled(Box)`
  padding: 0 15%;
  & .search {
    margin-top: 2rem;
  }
`;

function Entrepreneurship() {
  const [books, setBooks] = useState<bookDetailsType[]>();
  const [trendingBlinks, setTrendingBlinks] = useState<string[]>([]);
  const [justAdded, setJustAdded] = useState<string[]>([]);
  const [featured, setFeatured] = useState<string[]>([]);
  useEffect(() => {
    const books = "http://localhost:3000/books";

    const trending = "http://localhost:3000/trendingBlinks";
    const justAdded = "http://localhost:3000/justAdded";
    const featured = "http://localhost:3000/featured";
    const fetchData = async () => {
      try {
        const response = await fetch(books);
        const json = await response.json();
        setBooks([...json]);

        const response2 = await fetch(trending);
        const json2 = await response2.json();
        setTrendingBlinks(json2);

        const response3 = await fetch(justAdded);
        const json3 = await response3.json();
        setJustAdded(json3);

        const response4 = await fetch(featured);
        const json4 = await response4.json();
        setFeatured(json4);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const addNewBookToLibrary = (event: any) => {
    const bookToAdd = books?.filter(
      (ele) => ele.coverImage === event.target.id
    );
    if (sessionStorage.length === 0) {
      sessionStorage.setItem("books", JSON.stringify(bookToAdd));
    } else {
      const sessionBooks: any = JSON.parse(
        sessionStorage.getItem("books") || "[]"
        );
      if (
        !sessionBooks.some((book: any) => book.coverImage === event.target.id)
      ) {
        const newBooks = sessionBooks.concat(bookToAdd);
        sessionStorage.setItem("books", JSON.stringify(newBooks));
      }
    }
  };
  return (
    <BoxStyled>
      <ExploreBanner />
      <SearchBar />
      <TrendingBlinks
        booksNeeded={books?.filter((ele: bookDetailsType) =>
          trendingBlinks.includes(ele.title)
        )}
        addNewBookToLibrary={addNewBookToLibrary}
      />
      <JustAdded
        booksNeeded={books?.filter((ele: bookDetailsType) =>
          justAdded.includes(ele.title)
        )}
        addNewBookToLibrary={addNewBookToLibrary}
      />
      <Featured
        booksNeeded={books?.filter((ele: bookDetailsType) =>
          featured.includes(ele.title)
        )}
        addNewBookToLibrary={addNewBookToLibrary}
      />
    </BoxStyled>
  );
}

export default Entrepreneurship;
