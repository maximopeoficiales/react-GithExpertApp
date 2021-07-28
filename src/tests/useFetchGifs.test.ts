import "@testing-library/jest-dom/extend-expect";
import useFetchGifs from "../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'

describe("Prueba en el hook useFetchGifts", () => {
    test('debe retornar el estado inicial', async () => {
        // obtiene el resultado del custom hook
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Superman"));
        const { gifts, loading } = result.current;
        // espero que se cambie el estado
        await waitForNextUpdate();
        expect(gifts.length).toBe(0);
        expect(loading).toBeTruthy();
        // console.log(gifts, loading);

    });
    test('debe retornar un arreglo de imgs y loading en false', async () => {
        // obtiene el resultado del custom hook
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Superman"));
        await waitForNextUpdate();
        const { gifts, loading } = result.current;
        // espero que se cambie el estado
        expect(gifts.length).toBe(12);
        expect(loading).toBeFalsy();
        console.log(gifts, loading);
    })


})