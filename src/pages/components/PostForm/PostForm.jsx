import "./PostForm.scss";
import { useState } from "react";
const PostForm = ({ create, setVisible }) => {
  const [post, setPost] = useState({
    categories: "Название категории",
    subcategory: "Название подкатегории",
    brand: "Название бренда",
    items: "-",
    cashback: "20",
    id: Date.now(),
  });

  const addPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({
      categories: "Название категории",
      subcategory: "Название подкатегории",
      brand: "Название бренда",
      items: "-",
      cashback: "20",
      id: Date.now(),
    });
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVisible(false);
  };

  return (
    <form
      onClick={(e) => e.stopPropagation()}
      className="form__modal"
      action="submit"
    >
      <div className="buttons__modal">
        <button onClick={closeModal} className="button__modal">
          Удалить
        </button>
        <button onClick={addPost} className="button__modal button__modal_sec">
          Сохранить
        </button>
      </div>
      <p className="modal__text">Начисление кешбека с покупки</p>
      <input
        type="number"
        value={post.cashback}
        onChange={(e) => setPost({ ...post, cashback: e.target.value })}
        className="input__modal"
      ></input>
      <p className="modal__text">Категория</p>
      <div className="select__modal">
        <select
          value={post.categories}
          onChange={(e) => setPost({ ...post, categories: e.target.value })}
        >
          <option disabled value="">
            Название категории
          </option>
          <option value="Эстетический уход">Эстетический уход</option>
          <option value="Пилинги">Пилинги</option>
          <option value="Средства для коррекции фигуры и массажа ">
            Средства для коррекции фигуры и массажа{" "}
          </option>
        </select>
      </div>
      <p className="modal__text">Подкатегория</p>
      <div className="select__modal">
        <select
          value={post.subcategory}
          onChange={(e) => setPost({ ...post, subcategory: e.target.value })}
        >
          <option disabled value="">
            Название подкатегории
          </option>
          <option value="Очищение">Очищение</option>
          <option value="Скрабы">Скрабы</option>
          <option value="Тонизация">Тонизация</option>
          <option value="Кремы и гели">Кремы и гели</option>
          <option value="Кислотные пилинги">Кислотные пилинги</option>
        </select>
      </div>
      <p className="modal__text">Бренд</p>
      <div className="select__modal">
        <select
          value={post.brand}
          onChange={(e) => setPost({ ...post, brand: e.target.value })}
        >
          <option disabled value="">
            Имя бренда
          </option>
          <option value="Academie">Academie</option>
          <option value="Frolyis Pro">Frolyis Pro</option>
          <option value="Kosmoteros Personnel Paris">
            Kosmoteros Personnel Paris
          </option>
        </select>
      </div>
    </form>
  );
};

export default PostForm;
