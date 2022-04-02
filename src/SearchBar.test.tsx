import React from "react";
// import SearchBar from "";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SearchBar from "./components/molecules/SearchBar";

describe("SearchBar", () => {
    test("renders Search Bar", () => {
        render(<SearchBar />);
        expect(screen.getByTestId("searchBar")).toBeInTheDocument();
    }  )
});