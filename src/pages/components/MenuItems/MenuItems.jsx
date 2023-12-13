import "./MenuItems.scss";
const MenuItems = ({ handlerAllCheckbox }) => {
  return (
    <div className="menuItems">
      <input
        onChange={handlerAllCheckbox}
        className="input__menuItems"
        type="checkbox"
      ></input>
      <span>Категория</span>
      <span>Подкатегория</span>
      <span>Бренд</span>
      <span>Товары</span>
      <span>Кешбек</span>
    </div>
  );
};
export default MenuItems;
