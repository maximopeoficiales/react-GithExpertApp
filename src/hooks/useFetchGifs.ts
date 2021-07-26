import { useEffect, useState } from "react";
import UseFetchGift from "../api/interfaces/UseFetchGift";
import getGiftByCategory from "../helpers/getGift";

const useFetchGifs = (category: string): UseFetchGift => {

    const [gifts, setGifts] = useState({
        gifts: [], loading: true
    } as UseFetchGift);

    useEffect(() => {
        (async () => {
            setGifts({
                gifts: await getGiftByCategory(category),
                loading: false
            } as UseFetchGift);
        })();
    }, [category])
    return gifts;
}
export default useFetchGifs;