import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddCategory from "./AddCategory";
import { shallow, ShallowWrapper } from "enzyme";

describe("<AddCategory />", () => {
  // al instanciarlo asi, me permite contar cuantas veces fue ejecutado
  const addCategory = jest.fn();
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    // borrar todas interacciones realizadas
    jest.clearAllMocks();
    // vuelve a  cargar el componente
    wrapper = shallow(<AddCategory addCategory={addCategory} />);
  });

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe cambiar la caja de texto", () => {
    let input = wrapper.find("input");
    const value = "HOla bro cambie el texto";
    // simula el evento y envia el evento como objecto
    input.simulate("change", { target: { value } });

    // se busca el input y se verifica si cambio su valor
    input = wrapper.find("input");
    const textValor = input.prop("value");
    console.log(textValor);

    expect(textValor).toBe(value);
  });

  test("No debe poster informacion con submit", () => {
    // simula el evento submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    // se espera que la funcion no se halla llamado
    expect(addCategory).not.toHaveBeenCalled();
  });
  test("debe de llamar el addCategory y limpiar la caja de texto", () => {
    // simular inputChange
    let input = wrapper.find("input");
    const value = "HOla bro cambie el texto";
    // simula el evento y envia el evento como objecto
    input.simulate("change", { target: { value } });

    // simular evento submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    console.log(wrapper.find("input").props());

    expect(addCategory).toHaveBeenCalled();
    // espera que se llamo 1 vez
    expect(addCategory).toHaveBeenCalledTimes(1);
    // espera que la funciona se llame con una funcion
    // expect(addCategory).toHaveBeenCalledWith(expect.any(Function));
    expect(addCategory).toHaveBeenCalledWith(expect.any(String));

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
