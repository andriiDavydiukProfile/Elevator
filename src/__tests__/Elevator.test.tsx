import React from "react";
import { render } from "@testing-library/react";
import { Elevator } from "../components/Elevator";
import "@testing-library/jest-dom/extend-expect";

describe("Elevator component", () => {
    test("renders correctly", () => {
        const { getByTestId } = render(<Elevator />);
        const elevatorComponent = getByTestId("elevator");
        expect(elevatorComponent).toBeInTheDocument();
    });

    test("has the correct styles", () => {
        const { getByTestId } = render(<Elevator />);
        const elevatorCage = getByTestId("elevator-cage");
        const elevatorCageInner = getByTestId("elevator-cage-inner");

        expect(elevatorCage).toHaveStyle("background-color: #c0617d");
        expect(elevatorCageInner).toHaveStyle("background-color: #873655");
    });
});
