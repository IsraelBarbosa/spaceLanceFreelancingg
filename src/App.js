import "./App.css";
import CheckoutTheBest from "./components/CheckoutTheBest/CheckoutTheBest";
import ChooseDifferent from "./components/ChooseDifferent/ChooseDifferent";
import FindTheBest from "./components/FindTheBest/FindTheBest";
import Footer from "./components/Footer/Footer";
import HeaderEHero from "./components/HeaderEHero/HeaderEHero";
import NewsletterSubscription from "./components/NewsletterSubscription/NewsletterSubscription";
import RecentlyPosted from "./components/RecentlyPosted/RecentlyPosted";
import Servicos from "./components/Servicos/Servicos";

function App() {
  return (
    <>
      <HeaderEHero />
      <Servicos />
      <FindTheBest />
      <RecentlyPosted />
      <ChooseDifferent />
      <CheckoutTheBest />
      <NewsletterSubscription />
      <Footer />
    </>
  );
}

export default App;
