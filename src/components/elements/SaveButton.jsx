import styled from "styled-components";

const SaveButton = ({ text = "GUARDAR" }) => {
  return <SubmitButton type="submit"> {text}</SubmitButton>;
};

const SubmitButton = styled.button`
  background-color: #00cbff;
  width: 100%;
  height: 50px;
  border-radius: 50px;
  font-weight: bold;
  border: 0px;
  cursor: pointer;
`;

export { SaveButton };
