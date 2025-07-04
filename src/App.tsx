import { Adme } from "./components/Adme/Adme";
import { Contacts } from "./components/Contacts/Contacts";
import { Conveyor } from "./components/Conveyor/Conveyor";
import { Customer } from "./components/Customer/Customer";
import { Footer } from "./components/Footer/Footer";
import { LeadGen } from "./components/LeadGen/LeadGen";
import { Main } from "./components/Main/Main";
import { QuestionAnswer } from "./components/QuestionAnswer/QuestionAnswer";
import { Reg } from "./components/Reg/Reg";
import { Registry } from "./components/Registry/Registry";
import { Swiper } from "./components/Swiper/Swiper";
import { TargerLeads } from "./components/TargerLeads/TargerLeads";
import { Technology } from "./components/Technology/Technology";
import { Video } from "./components/Video/Video";

function App() {
  return (
    <>
      <Main />
      <TargerLeads />
      <Conveyor />
      <Customer />
      <Technology />
      <Registry />
      <Swiper />
      <Video />
      <Adme />
      <Reg />
      <QuestionAnswer />
      <LeadGen />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
