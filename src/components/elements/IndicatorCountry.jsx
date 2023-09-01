import styled from "styled-components";

const IndicatorInput = ({ country = "+" }) => {
  return <IndicatorCountry defaultValue={country} />;
};

const IndicatorCountry = styled.input`
  width: 50px;
  height: 32px;
  border-radius: 12px;
  border: 1px solid lightgray;
  cursor: pointer;
  padding: 4px 12px;
`;

export { IndicatorInput };
