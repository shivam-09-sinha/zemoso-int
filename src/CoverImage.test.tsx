import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import CoverImage from "./components/atoms/cover_image/CoverImage";

describe("CoverImage", () => {
  test("renders icon", () => {
    render(<CoverImage name="1" />);
    expect(screen.getByTestId("coverImage")).toBeInTheDocument();
  }); 
});