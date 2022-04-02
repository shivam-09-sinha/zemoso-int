import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Avatar from "./components/atoms/Avatar";



describe("Avatar Image", () => {
    test("renders AvatarImage", () => {
        render(<Avatar />);
        expect(screen.getByTestId("avatarImage")).toBeInTheDocument();
    }  )
});