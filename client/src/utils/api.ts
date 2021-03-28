import ky from "ky";
import { CardCreate, Card } from "../types";

export const getAllCards = (): Promise<Array<Card>> => {
  const API_URL = getApiUrl();
  return ky.get(`${API_URL}/cards`).json();
};

export const createCard = (payload: CardCreate): Promise<unknown> => {
  const API_URL = getApiUrl();
  return ky.post(`${API_URL}/add`, { json: payload });
};

export const deleteCard = (id: string): Promise<any> => {
  const API_URL = getApiUrl();
  const payload = {
    cardId: id,
  };
  return ky.delete(`${API_URL}/delete`, { json: payload }).json();
};

export const getApiUrl = (): string => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3003";
  } else {
    return "https://node11255.herokuapp.com";
  }
};
