import Navbar from "./navbar";
import Footer from '../components/Footer.js'
const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div> {children} </div>;
      <Footer />
    </>
  );
};
export default layout;
