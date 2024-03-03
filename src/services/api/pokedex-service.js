import axiosInstance from "../axios-config/axiosInstance";

export const pokedexApi = {
  getAllCharacters: async () => {
    let response = await axiosInstance.get(`pokemon?limit=15`);
    return response;
  },
  getCharacterByName: async (name) => {
    let result = await axiosInstance.get(`pokemon/${name}`);
    return result;
  },
};
