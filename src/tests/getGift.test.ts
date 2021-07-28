import "@testing-library/jest-dom/extend-expect";
import GiftImage from "../api/interfaces/GiftImage";
import getGiftByCategory from "../helpers/getGift";

describe("Pruebas en funcion getGift", () => {
  test("Debe traer me 12 elementos", async () => {
    let gifts = (await getGiftByCategory("superman")) as GiftImage[];
    // console.log(gifts);
    
    expect(gifts.length).toBe(12);

  });

  test("No debe traer elementos", async () => {
    let gifts = (await getGiftByCategory("")) as GiftImage[];
    expect(gifts.length).toBe(0);
  });
});
