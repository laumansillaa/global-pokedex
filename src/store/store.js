import { createStore } from "vuex";
import { pokedexApi } from "@/services/api/pokedex-service";
import {
  characterDetailAdapter,
  characterListAdapter,
} from "./adapter/character";

const store = createStore({
  state() {
    return {
      characters: [],
      favoriteState: [],
      detailCharacter: {},
      filteredCharacters: [],
      loading: false,
      clientError: false,
      serverError: {
        status: false,
        message: "",
      },
    };
  },

  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },

    addFavorite(state, character) {
      let characterUpdated = { ...character, isFavorite: true };
      const listCharactersUpdated = state.characters.map((personaje) =>
        personaje.id === character.id ? { ...characterUpdated } : personaje
      );
      const favoritesUpdated = [...state.favoriteState, characterUpdated];

      (state.characters = listCharactersUpdated),
        (state.favoriteState = favoritesUpdated);
    },

    removeFavorite(state, character) {
      let characterUpdated = { ...character, isFavorite: false };
      const listCharactersUpdated = state.characters.map((personaje) =>
        personaje.id === character.id ? { ...characterUpdated } : personaje
      );
      const favoritesState = [...state.favoriteState];
      const favoritesUpdated = favoritesState.filter(
        (favorite) => favorite.id !== character.id
      );
      (state.characters = listCharactersUpdated),
        (state.favoriteState = favoritesUpdated);
    },

    setDetailCharacter(state, character) {
      state.detailCharacter = character;
    },

    clearDetailCharacter(state) {
      state.detailCharacter = {};
    },

    setFilteredCharacters(state, characters) {
      state.filteredCharacters = characters;
    },

    setLoader(state, value) {
      state.loading = value;
    },

    setError(state, value) {
      state.clientError = value;
    },

    setServerError(state, value) {
      state.serverError = value
    }
  },

  actions: {
    async handleGetCharacters(context) {
      context.commit("setLoader", true); 
      try {
        const response = await pokedexApi.getAllCharacters();
        let characters = characterListAdapter(response.data.results);
        context.commit("setCharacters", characters);
      } finally {
        context.commit("setLoader", false);
      }
    },
    async handleGetCharacterDetail(context, payload) {
      const response = await pokedexApi.getCharacterByName(
        payload.name.toLowerCase()
      );
      const detail = characterDetailAdapter({
        ...response.data,
        id: payload.id,
        isFavorite: payload.isFavorite,
      });
      context.commit("setDetailCharacter", detail);
    },
    handleFilterCharacters(context, searchInput) {
      const filteredCharacters = [...context.state.characters];

      const filteredResults = filteredCharacters.filter((character) => {
        const nameLower = character.name.toLowerCase();
        const searchLower = searchInput.toLowerCase();
        return nameLower.includes(searchLower);
      });

      if (filteredResults.length === 0) {
        context.commit("setError", true);
      }

      context.commit("setFilteredCharacters", filteredResults);
    }
  },
});

export default store;
