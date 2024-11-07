import { itemsData } from "../data/etsy";

interface IMainImage {
  url_570xN: string;
}

export interface IItemsData {
  listing_id: number;
  url: string;
  MainImage: IMainImage;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
}

const mapToIItemsData = (item): IItemsData | null => {
  if (
    typeof item.listing_id === "number" &&
    typeof item.url === "string" &&
    typeof item.MainImage === "object" &&
    typeof item.MainImage.url_570xN === "string" &&
    typeof item.title === "string" &&
    typeof item.currency_code === "string" &&
    typeof item.price === "string" &&
    typeof item.quantity === "number"
  ) {
    return {
      listing_id: item.listing_id,
      url: item.url,
      MainImage: { url_570xN: item.MainImage.url_570xN },
      title: item.title,
      currency_code: item.currency_code,
      price: item.price,
      quantity: item.quantity,
    };
  }
  return null;
};

export const getData = (): IItemsData[] => {
  const jsonString = JSON.stringify(itemsData);
  const parsedArray = JSON.parse(jsonString);

  const parsedData: IItemsData[] = parsedArray
    .map(mapToIItemsData)
    .filter((item): item is IItemsData => item !== null);

  return parsedData;
};
