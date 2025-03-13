export default function checkIdUrl(req, res, next) {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ error: "Отсутствует Id в строке запроса" });
  }
  next();
}
