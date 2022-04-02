import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Footer from "./components/organisms/footer/Footer";

describe("Footer", () => {
    test("renden Footer", () => {
        render(<Footer />);
        expect(screen.getByTestId("footer")).toBeInTheDocument();
    }  )
});