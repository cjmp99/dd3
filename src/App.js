import Footer from "./components/molecules/Footer";
import Navbar from "./components/molecules/Navbar";
import SelectedProperty from "./components/organisms/SelectedProperty";
import ContactForm from "./components/organisms/ContactForm";
import FilterSection from "./components/organisms/FilterSection";
import { ColOrRow } from "./components/atoms/ColOrRow";

function App() {

  return (
    <div style={{ maxWidth: '100%', background: '#F2F2F2' }}>
      <Navbar />

      <ColOrRow>
        <SelectedProperty />

        <ContactForm />
      </ColOrRow>

      <FilterSection />
      <Footer />
    </div>
  );
}

export default App;
