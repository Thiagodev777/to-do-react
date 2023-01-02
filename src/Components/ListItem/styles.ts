import styled from "styled-components";

type ContainerProp = {
  done?: boolean;
}
export const Container = styled.div<ContainerProp>`
  display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  font-weight: bold;
  text-decoration: ${({done}) => done ? 'line-through' : null};

  input {
    width: 25px;
    height: 25px;
    margin-right: 25px;
  }

  label {
    color: #CCC;
  }
`;