import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import MenuTabs from "./components/molecules/menu/MenuTabs";

describe("Menu", () => {
    test("renders Menu", () => {
        render(<MenuTabs />);
        expect(screen.getByTestId("menu")).toBeInTheDocument();
    }  )
});