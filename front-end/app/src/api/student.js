// call api
const getProductList = async () => {
  const res = await axios({
    method: "GET",
    url: `http://localhost:4000/products`,
  });
  return res.data;
};

const getProductDetail = async (id) => {
  const res = await axios({
    method: "GET",
    url: `http://localhost:4000/products/${id}`,
  });
  return res.data;
};

const createProduct = async (student) => {
  const res = await axios({
    method: "POST",
    url: `http://localhost:4000/products`,
    data: student,
  });
  return res.data;
};

const updateProduct = async (id, student) => {
  const res = await axios({
    method: "PUT",
    url: `http://localhost:4000/products/${id}`,
    data: student,
  });
  return res.data;
};

const deleteProduct = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `http://localhost:4000/products/${id}`,
  });
  return res.data;

};

export {
  getProductList,
  getProductDetail,
  createProduct,
  updateProduct,
  deleteProduct,
};
