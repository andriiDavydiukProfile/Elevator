import styled from "styled-components";
import {Elevator, StyledElevator} from "../Elevator";
import { BuildingFloor } from "./BuildingFloor";
import {FLOOR_HEIGHT} from "../../constants";


interface BuildingProps {
    floors: number;
    currentFloor: number;
}

const StyledBuilding = styled.div<BuildingProps>`
  height: ${(props) => props.floors * FLOOR_HEIGHT}px;
  width: 606px;
  background: gray;

  position: relative;
  ${StyledElevator} {
    height: ${FLOOR_HEIGHT}px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(-${(props) => props.currentFloor * FLOOR_HEIGHT}px);
    transition: 1s ease-in-out transform;
  }
`;

export const Building = (props:BuildingProps) => {
    const buildingFloors = [];
    for (let i = 0; i < props.floors; i += 1) {
        buildingFloors.push(<BuildingFloor key={String(Math.random())} height={FLOOR_HEIGHT} />);
    }

    return (
        <StyledBuilding {...props}>
            {buildingFloors}
            <Elevator />
        </StyledBuilding>
    );
};
