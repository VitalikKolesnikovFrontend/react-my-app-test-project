import "./Search.scss";
const Search = ({ page, limit, setPage, setLimit, changePage, posts }) => {
  const nextPage = (e) => {
    e.preventDefault();
    if (page < Math.ceil(posts.length / limit)) {
      changePage(+page + 1);
    }
  };
  const prevPage = (e) => {
    e.preventDefault();
    if (page > 1) {
      changePage(+page - 1);
    }
  };

  return (
    <form className="search">
      <label className="label">Показывать</label>
      <select
        onChange={(e) => {
          setLimit(Number(e.target.value));
          setPage(1);
        }}
        value={limit}
        className="select"
        id="items"
        name="items"
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <label className="label">Страница</label>
      <input
        value={page}
        onChange={(e) => setPage(e.target.value)}
        className="input__search"
        type="number"
        name="page"
        min="1"
        readOnly
      />
      <span className="text__search">
        из {`${Math.ceil(posts.length / limit)}`}
      </span>
      <button onClick={prevPage} className="button__search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M10.9885 1.6684L10.9886 1.66828C11.0519 1.6079 11.1359 1.57422 11.2234 1.57422C11.31 1.57422 11.3934 1.6073 11.4564 1.66666C11.4807 1.69059 11.4999 1.71903 11.5132 1.75039C11.5267 1.78242 11.5337 1.81683 11.5337 1.8516C11.5337 1.88637 11.5267 1.92078 11.5132 1.95281C11.4998 1.98442 11.4803 2.01307 11.4559 2.03711L5.52753 7.71552L5.14854 8.07852L5.52945 8.43951L11.4566 14.0568C11.4807 14.0807 11.5 14.1091 11.5132 14.1404C11.5267 14.1724 11.5337 14.2068 11.5337 14.2416C11.5337 14.2764 11.5267 14.3108 11.5132 14.3428C11.4999 14.3742 11.4807 14.4026 11.4564 14.4265C11.3934 14.4859 11.31 14.519 11.2234 14.519C11.1359 14.519 11.0519 14.4853 10.9886 14.4249L10.9885 14.4248L4.6985 8.42481L4.6986 8.4247L4.68969 8.4166C4.63813 8.36974 4.59693 8.31262 4.56874 8.2489C4.54055 8.18518 4.52599 8.11628 4.52599 8.0466C4.52599 7.97693 4.54055 7.90802 4.56874 7.8443C4.59694 7.78059 4.63813 7.72346 4.68969 7.6766L4.68979 7.67671L4.6985 7.6684L10.9885 1.6684Z"
            fill="#B8BDCC"
            stroke="#AAAFBD"
          />
        </svg>
      </button>
      <button onClick={nextPage} className="button__search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M5.0115 14.3316L5.01138 14.3317C4.94813 14.3921 4.86405 14.4258 4.77662 14.4258C4.68996 14.4258 4.60661 14.3927 4.54356 14.3333C4.51935 14.3094 4.50007 14.281 4.48681 14.2496C4.47328 14.2176 4.46631 14.1832 4.46631 14.1484C4.46631 14.1136 4.47328 14.0792 4.48681 14.0472C4.50017 14.0156 4.51966 13.9869 4.54413 13.9629L10.4725 8.28448L10.8515 7.92148L10.4706 7.56049L4.54344 1.94322C4.51928 1.91932 4.50004 1.89092 4.48681 1.85961C4.47328 1.82758 4.46631 1.79317 4.46631 1.7584C4.46631 1.72363 4.47328 1.68922 4.48681 1.65719C4.50007 1.62583 4.51934 1.59739 4.54355 1.57347C4.6066 1.5141 4.68996 1.48102 4.77661 1.48102C4.86405 1.48102 4.94813 1.5147 5.01138 1.57508L5.0115 1.5752L11.3015 7.57519L11.3014 7.5753L11.3103 7.5834C11.3619 7.63026 11.4031 7.68738 11.4313 7.7511C11.4594 7.81482 11.474 7.88372 11.474 7.9534C11.474 8.02307 11.4594 8.09198 11.4313 8.1557C11.4031 8.21941 11.3619 8.27654 11.3103 8.3234L11.3102 8.32329L11.3015 8.3316L5.0115 14.3316Z"
            fill="#B8BDCC"
            stroke="#AAAFBD"
          />
        </svg>
      </button>
    </form>
  );
};
export default Search;
