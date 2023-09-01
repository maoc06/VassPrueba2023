import styled from "styled-components";
import {
  IndicatorInput,
  PhoneNumberInput,
  SaveButton,
  TitlePage,
} from "../elements";

const ContactTemplate = ({
  contactData,
  onChangePhoneData = () => {},
  onSendApi = () => {},
  contactState = {},
}) => {
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const response = await onSendApi({ contact: contactData });
    alert(`NUMERO DE CONTACTO: ${response.rawNumber}`);
    console.log(response);
  };

  return (
    <ContactFlexLayout>
      <TitlePage>CONTACTO VASS</TitlePage>

      <FormContact onSubmit={handleSubmitForm}>
        <PhoneSection>
          <IndicatorInput country={contactData.countryCode} />

          <PhoneNumberInput setState={onChangePhoneData} state={contactState} />
        </PhoneSection>

        <SaveButton />
      </FormContact>
    </ContactFlexLayout>
  );
};

const ContactFlexLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f8fa;
  height: 100vh;
  margin: auto;
`;

const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const PhoneSection = styled.section`
  display: flex;
  gap: 1rem;
`;

export { ContactTemplate };
