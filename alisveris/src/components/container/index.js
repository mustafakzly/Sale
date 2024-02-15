import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Container;
