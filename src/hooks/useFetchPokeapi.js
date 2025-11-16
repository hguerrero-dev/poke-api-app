import { useState } from "react";
import { useEvolutionPokemonApi } from "./useEvolutionPokemonApi";

export const useFetchPokeapi = () => {

  const API_URL = import.meta.env.VITE_API_URL;

  const [data, setData] = useState(null);
  const [evolutionData, setEvolutionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (selectedOption, inputValue) => {

    if (!inputValue) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(
        `${API_URL}${selectedOption}/${inputValue}`
      );

      if (!response.ok) throw new Error("Pokemon not found");

      const dataResponse = await response.json();

      // Solo buscar datos de evolución si es un Pokémon (no una habilidad)
      if (selectedOption === "pokemon" && dataResponse.species) {
        const { fetchEvolutionData } = useEvolutionPokemonApi();

        fetchEvolutionData(dataResponse.species.url).then(evolutionData => {
          if (evolutionData) {
            dataResponse.evolutionChain = evolutionData;
            setEvolutionData(evolutionData);
            // console.log("Evolution Chain Data inside fetchData:", evolutionData);
          }
        });
      } else {
        setEvolutionData(null);
      }

      setData(dataResponse);
    } catch (error) {
      setError(error.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const clearData = () => {
    setData(null);
    setError(null);
  };

  return { data, evolutionData, loading, error, fetchData, clearData };
}

