import "./Modal.scss";
const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = ["modal"];
  if (visible) {
    rootClasses.push("active");
  }
  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
      {children}
    </div>
  );
};

export default Modal;
