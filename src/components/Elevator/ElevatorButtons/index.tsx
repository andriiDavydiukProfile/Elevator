import React from "react";

import {ElevatorButton} from "../ElevatorButton";

import styled from "styled-components";

const StyledElevatorButtons = styled.div`
  position: absolute;
  width: 30px;
  right: 200px;
  top: 100px;
`;

interface ElevatorButtonsProps {
    floors: number;
    pressed: any;
    onFloorRequest: (floor: number) => void;
    [key: string]: any;
}

export const ElevatorButtons = ({floors, pressed, onFloorRequest, ...rest}: ElevatorButtonsProps) => {
    const onButtonPress = React.useCallback(
        (index: number) => () => {
            if (typeof onFloorRequest === "function") {
                onFloorRequest(index);
            }
        },
        [onFloorRequest]
    );

    const buttons: JSX.Element[] = [];
    Array.from({ length: floors }).forEach((_, i) => {
        buttons.push(
            <ElevatorButton key={i} pressed={pressed.includes(i)} onClick={onButtonPress(i)}>
                {i + 1}
            </ElevatorButton>
        );
    });

    return <StyledElevatorButtons {...rest}>{buttons}</StyledElevatorButtons>;
};
