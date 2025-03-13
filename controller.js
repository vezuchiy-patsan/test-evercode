import service from "./service.js";

class Controller {
  /**
   * Создаёт случайное число, сохраняет и возвращает его в ответе.
   * @route POST /generate
   */
  async createRandomNumber(_, res) {
    try {
      const responseFromService = await service.createRundomNumber();
      res.json(responseFromService);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  /**
   * Возвращает случайное число по его Id
   * @route GET /retrieve/:id
   */
  async getId(req, res) {
    try {
      const responseFromService = await service.getForId(req.params.id);
      res.json(responseFromService);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new Controller();
