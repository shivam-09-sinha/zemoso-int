import React from "react";

import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import Logo from "./components/atoms/Logo";
describe("Logo", () => {
    test("renders company logo", () => {
        render(<Logo />)
        expect(screen.getByTestId("logo")).toBeInTheDocument();
    })
})