import styled from "styled-components";

interface BuildingFloorProps {
    height: number;
}

export const StyledBuildingFloor = styled.div<BuildingFloorProps>`
  height: ${(props) => props.height}px;
  padding: 10px;
  display: flex;
  gap: 10px;
  box-sizing: border-box;
  width: 606px;
  background-image: url("/floor.png");
`;

export const BuildingFloor = ({ height, ...rest }:BuildingFloorProps) => {
    return (
        <StyledBuildingFloor height={height} {...rest}/>
    );
};
