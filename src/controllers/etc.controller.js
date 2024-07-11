// cek pesanan page
export const cekPesanan = (req, res) => {
  res.render("pages/etc/cek-pesanan/cek-pesanan.ejs", {
    page: "cek-pesanan",
    title: "Cek Pesanan",
  });
};
