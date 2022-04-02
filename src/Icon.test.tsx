import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Icons from "./components/atoms/icons/Icons";

describe("Icon", () => {
  test("renders icon", () => {
    render(<Icons name="search" />);
    expect(screen.getByTestId("icons")).toBeInTheDocument();
  });
  
});