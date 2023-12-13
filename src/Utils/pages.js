export const getPageCount = (totalItems, limit) => {
  return Math.ceil(totalItems / limit);
};
export const getPagesArray = (totalPages) => {
  const result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
};
