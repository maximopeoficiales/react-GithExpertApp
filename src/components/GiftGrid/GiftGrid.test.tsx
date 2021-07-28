import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GiftGrid from "./GiftGrid";
import { shallow } from "enzyme";
import useFetchGifs from "../../hooks/useFetchGifs";
import UseFetchGift from "../../api/interfaces/UseFetchGift";
import GiftImage from "../../api/interfaces/GiftImage";

jest.mock("../../hooks/useFetchGifs");

describe("<GiftGrid />", () => {
  const category = "Pokemon";

  const gifts: GiftImage[] = [
    {
      id: "43",
      imgUrl: "alguna url",
      title: "algun titulo",
      bitly_url: "algun link",
    },
  ];
  test("debe de mostrar el snapshot <GiftGrid/>", () => {
    // su estado inicial de useFetchGifs es en true y sin data
    (useFetchGifs as jest.Mock).mockReturnValue({
      gifts: [],
      loading: true,
    } as UseFetchGift);
    const wrapper = shallow(<GiftGrid category={category} />);
    // verifica si se renderizo correctamente
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar items cuando se cargan las images useFetchGifs <GiftGrid/>", () => {
    // su estado inicial de useFetchGifs es en false y con data
    (useFetchGifs as jest.Mock).mockReturnValue({
      gifts,
      loading: false,
    } as UseFetchGift);
    const wrapper = shallow(<GiftGrid category={category} />);
    // verifica si se renderizo correctamente
    expect(wrapper).toMatchSnapshot();
    // si el p  esta vacio
    expect(wrapper.find("p").text().trim()).toBe("");
    expect(wrapper.find("GiftGridItem").length).toBe(gifts.length);
  });
});
