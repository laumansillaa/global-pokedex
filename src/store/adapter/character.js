import { generateUuid } from "../../utils/generateUuid";

export const characterDetailAdapter = (values) => {
  let character = {
    name: values.name[0].toUpperCase() + values.name.slice(1),
    image: values.sprites.other["official-artwork"].front_default,
    height: values.height,
    weight: values.weight,
    id: values.id,
    types: values.types.map((e) => e.type.name[0].toUpperCase() + e.type.name.slice(1)).join(', '),
    isFavorite: values.isFavorite

  };

  return character;
};

export const characterListAdapter = (values) => {
  return values.map((character) => {
    return {
      name: character.name[0].toUpperCase() + character.name.slice(1),
      id: generateUuid(),
      url: character.url,
    };
  });
};
