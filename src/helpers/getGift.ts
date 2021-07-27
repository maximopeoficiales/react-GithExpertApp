import GiftImage from "../api/interfaces/GiftImage";

const getGiftByCategory = async (category: string) => {
    try {
        let data = await (
            await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=R4crr9k3wTfV8ISXAxeiCr51A5qQNGaA&q=${encodeURI(
                    category
                )}&limit=12`
            )
        ).json();

        return data.data.map((image: any) => {
            return {
                id: image.id,
                title: image.title,
                bitly_url: image.bitly_url,
                imgUrl: image.images.downsized_medium.url,
            } as GiftImage;
        });
    } catch (error) {
        console.log(error);
    }
};

export default getGiftByCategory;