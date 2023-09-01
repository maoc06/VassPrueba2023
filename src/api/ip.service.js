import ipApiClient from "./RestClient";

const getContactData = async () => {
  const contactData = await ipApiClient.get("/");
  return contactData;
};

const sendContactData = ({ contact = { countryCode: "", phone: "" } }) => {
  let pureCountryCode = contact.countryCode.replace("+", "");
  const res = { rawNumber: `${pureCountryCode}${contact.phone}` };
  return res;
};

export { getContactData, sendContactData };
