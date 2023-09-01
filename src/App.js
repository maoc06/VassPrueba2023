import { useEffect, useState } from "react";
import { ContactTemplate } from "./components/templates";
import { getContactData, sendContactData } from "./api";

function App() {
  const [phoneData, setPhoneData] = useState({
    countryCode: "",
    phone: "",
  });

  useEffect(() => {
    getPhoneData();
  }, []);

  const getPhoneData = async () => {
    const response = await getContactData();
    if (response.data) {
      const { country_calling_code: countryCode } = response.data;
      setPhoneData({ ...phoneData, countryCode: countryCode });
    }
  };

  return (
    <>
      <ContactTemplate
        contactData={phoneData}
        contactState={phoneData}
        onChangePhoneData={setPhoneData}
        onSendApi={sendContactData}
      />
    </>
  );
}

export default App;
