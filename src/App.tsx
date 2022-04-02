import { ThemeProvider } from "@mui/material";
import MainPage from "./components/pages/MainPage";
import theme from "./Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entrepreneurship from "./components/organisms/entrepreneurship/Entrepreneurship";
import EntrepreneurshipPage from "./components/pages/EntrepreneurshipPage";
import BookDetailViewPage from "./components/pages/BookDetailViewPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<MainPage />} />
              <Route
                path="/entrepreneurship"
                element={<EntrepreneurshipPage />}
              />
              <Route path="/bookdetail/:bookid" element={<BookDetailViewPage  />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
