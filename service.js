import getRandomInt from "./helpers/getRandomInt.js";
import * as uuid from "uuid";
import fs from "fs/promises";

class Service {
  /**
   * Создаёт случайное число, сохраняет его в файл и возвращает объект с данными.
   * @returns {Object} Возвращает объект с уникальным ID и случайным числом.
   * @throws {Error} Если произошла ошибка при чтении или записи файла.
   */
  async createRundomNumber() {
    let dataArr = [];

    const newObject = {
      id: uuid.v7(),
      number: getRandomInt(1, 1000),
    };

    try {
      const data = await fs.readFile("./data.json", "utf-8");
      dataArr = [...JSON.parse(data)];
    } catch (error) {
      if (error.code === "ENOENT") {
        console.log("Файл не найден будет создан новый");
      } else {
        console.error("Ошибка чтения", error);
        throw error;
      }
    }

    dataArr.push(newObject);

    await fs.writeFile("data.json", JSON.stringify(dataArr), "utf-8", (err) => {
      if (err) {
        console.error("Ошибка записи файла", err);
      } else {
        console.log("data.json записан");
      }
    });

    return newObject;
  }

  /**
   * Ищет запись по уникальному ID в файле.
   * @param {string} id Уникальный идентификатор записи.
   * @returns {Object} Возвращает найденную запись.
   * @throws {Error} Если файл не найден или запись с указанным ID отсутствует.
   */
  async getForId(id) {
    let dataArr = [];
    try {
      const data = await fs.readFile("./data.json", "utf-8");
      dataArr = [...JSON.parse(data)];
    } catch (error) {
      throw error;
    }

    const response = dataArr.find((f) => f.id === id);

    if (response !== undefined) {
      return response;
    }

    throw new Error("Не найдена запись");
  }
}

export default new Service();
