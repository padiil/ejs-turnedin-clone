import { cekPesanan } from "../controllers/etc.controller.js";

export const route = (app) => {
    // cek pesanan page
    app.get("/cek-pesanan", cekPesanan);
};