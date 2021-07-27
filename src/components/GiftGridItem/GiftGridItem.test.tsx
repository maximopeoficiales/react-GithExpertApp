import React from "react";
import "@testing-library/jest-dom/extend-expect";
import GiftGridItem from "./GiftGridItem";
import { shallow } from "enzyme";
import GiftImage from "../../api/interfaces/GiftImage";

describe("<GiftGridItem />", () => {
  const image: GiftImage = {
    id: "2",
    bitly_url:
      "https://i.picsum.photos/id/189/200/200.jpg?hmac=D4dFU1JWalnD5ZptSD-jGDOEc8abV1vBRfC5HstzT_8",
    title: "algun titulo",
    imgUrl: "imge...",
  };
  const wrapper = shallow(<GiftGridItem image={image} />);
  test("debe de mostrar <GiftGridItem/>", () => {
    // verifica si se renderizo correctamente
    expect(wrapper).toMatchSnapshot();
  });
  test("debe mostrar los datos identicos a los enviados por props", () => {
    const img = wrapper.find("img");
    const enlace = wrapper.find("a");
    const h1 = wrapper.find("h1");
    // console.log(img.props());
    // prop() busca en las propiedades del elemento
    expect(img.prop("src")).toBe(image.imgUrl);
    expect(enlace.prop("href")).toBe(image.bitly_url);
    expect(h1.text().trim()).toBe(image.title);
  });
  test("debe tener el div la clase card-gift", () => {
    const div = wrapper.find("div");
    const classes = div.prop("className");
    expect(classes?.includes("card-gift")).toBe(true);
  });
});
