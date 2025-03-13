import express from "express";

const PORT = 5000;

const app = express();

app.listen(PORT, () => console.log("Сервер запущен на порту", PORT));
