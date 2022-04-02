import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ExploreBanner from "./components/molecules/entrepreneurship/ExploreBanner";


describe("Explore Banner", () => {
    test("renders ExploreBanner", () => {
        render(<ExploreBanner />);
        expect(screen.getByTestId("explorebanner")).toBeInTheDocument();
    }  )
});