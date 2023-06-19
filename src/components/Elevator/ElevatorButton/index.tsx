import styled from "styled-components";

const StyledElevatorButton = styled.button`
  &[aria-pressed="true"] {
    background: yellow;
  }
  border: 5px solid black;
  height: 70px;
  width: 70px;
  font-weight: bold;
  font-size: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const ElevatorButton = ({ pressed, ...rest }: { pressed: boolean, [key: string]: any }) => {
    return <StyledElevatorButton aria-pressed={pressed} {...rest} />;
};
