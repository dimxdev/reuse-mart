const formatRupiah = (value) => {
  return new Intl.NumberFormat("id-ID").format(value);
};

export default formatRupiah