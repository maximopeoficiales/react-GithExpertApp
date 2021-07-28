import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GiftExpertApp from "./GiftExpertApp";
import { shallow } from "enzyme";

describe("<GiftExpertApp />", () => {
  const categorys = ["rick y morty"];
  test("it should mount", () => {
    const wrapper = shallow(<GiftExpertApp categorysStatic={categorys} />);
    // verifica si se renderizo correctamente
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GiftGrid").length).toBe(categorys.length);
  });
});
