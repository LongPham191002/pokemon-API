import {PokemonDetailModel, PokemonModel} from "../../models/pokemon.model";

export interface PokemonState {
  pokemonList: PokemonModel[];
  isLoadingList: boolean;
  listError: string;

  pokemonDetailList: PokemonDetailModel[];
  isLoadingDetailList: boolean;
  detailListError: string;
}
