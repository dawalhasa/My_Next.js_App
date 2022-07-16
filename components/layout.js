import Navbar from "./navbar";
const layout = ({ children }) => {
  return (
    <>
      <Navbar /> 
      <div> {children} </div>;
    </>
  );
};
export default layout;
