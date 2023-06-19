import styled from "styled-components";

export const StyledElevator = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const StyledElevatorCage = styled.div`
  height: 100%;
  width: 80px;
  background: #c0617d;
  border-radius: 3px;
  position: relative;
`;

const StyledElevatorCageInner = styled.div`
  width: 50%;
  height: 100%;
  background: #873655;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  position: absolute;
  left: 0;
  top: 0;
`;

export const Elevator = () => {
    return (
        <StyledElevator data-testid="elevator">
            <StyledElevatorCage data-testid="elevator-cage">
                <StyledElevatorCageInner data-testid="elevator-cage-inner" />
            </StyledElevatorCage>
        </StyledElevator>
    );
};
