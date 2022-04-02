import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import BannerImage from "./components/atoms/BannerImage";

describe("Banner Image", () => {
    test("renders BannerImage", () => {
        render(<BannerImage />);
        expect(screen.getByTestId("bannerImage")).toBeInTheDocument();
    }  )
});