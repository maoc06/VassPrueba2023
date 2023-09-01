import styled from "styled-components";

const PhoneNumberInput = ({ state = {}, setState = () => {} }) => {
  const handleChangeNumber = (e) => {
    const phoneNumber = e.target.value;
    setState({ ...state, phone: phoneNumber });
  };

  return <PhoneNumber type="number" onChange={handleChangeNumber} />;
};

const PhoneNumber = styled.input`
  width: 172px;
  height: 32px;
  border-radius: 12px;
  border: 1px solid lightgray;
  cursor: pointer;
  padding: 4px 12px;
`;

export { PhoneNumberInput };
