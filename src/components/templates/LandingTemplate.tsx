import BookDetail from "../organisms/bookdetail/BookDetail";
import Entrepreneurship from "../organisms/entrepreneurship/Entrepreneurship";
import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header";
import MyLibrary from "../organisms/mylibrary/MyLibrary";

type LandingProps = {
  page: "entrepreneurship" | "main" | "bookdetail";
  bookid?: string;
};

function LandingTemplate({ page, bookid }: LandingProps) {
  const getRequiredPage = () => {
    if (page === "main") return <MyLibrary />;
    else if (page === "entrepreneurship") return <Entrepreneurship />;
    else if (page === "bookdetail") return <BookDetail />;
  };

  return (
    <>
      <Header />
      {getRequiredPage()}
      <Footer />
    </>
  );
}

export default LandingTemplate;
