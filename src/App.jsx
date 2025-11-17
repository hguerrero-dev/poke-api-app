import { useState } from "react"
import { useFetchPokeapi } from "./hooks/useFetchPokeapi";
import { Card, Text, Flex, Separator } from "@radix-ui/themes";
import { FormComponent } from "./components/FormComponent";
import { PokemonImageComponent } from "./components/PokemonImageComponent";
import { DataListComponent } from "./components/DataListComponent";
import { ListAbilitiesComponent } from "./components/ListAbilitiesComponent";
import { SkeletonComponent } from "./components/SkeletonComponent";
import { EvolutionComponent } from "./components/EvolutionComponent";
import { PokemonByAbilityComponent } from "./components/PokemonByAbilityComponent";
import { getPokemonColor } from "./utils/pokemonTypeColors";

export const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("pokemon");
  const { data, evolutionData, loading, error, fetchData, clearData } = useFetchPokeapi();

  const handleSubmit = () => {
    fetchData(selectedOption, inputValue);
  };

  const pokemonColor = data ? getPokemonColor(data) : null;

  return (
    <>
      <FormComponent
        inputValue={inputValue}
        setInputValue={setInputValue}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        onSubmit={handleSubmit}
        onClear={clearData}
      />

      {loading && <SkeletonComponent />}

      {error &&
        <Card className="mx-auto my-8 px-8 py-16 max-w-2xl bg-white/90 backdrop-blur-sm shadow-xl">
          <Flex justify="center" align="center">
            <Text size="5" className="text-red-500">
              {error}
            </Text>
          </Flex>
        </Card>
      }

      {
        data && Object.keys(data).length > 0 && (
          <>
            {selectedOption === "ability" ? (
              <PokemonByAbilityComponent abilityData={data} /> 
            ) : (
              <Card className="mx-auto my-8 px-8 py-16 max-w-2xl bg-white/90 backdrop-blur-sm shadow-xl">
                <Flex
                  direction="column"
                  gap="6"
                  align="center"
                  className="p-4 w-full"
                >

                  <PokemonImageComponent data={data} typeColor={pokemonColor?.card} />

                  <Flex direction="column" gap="4" align="center" className="w-full">
                    <Text size="6" style={{ fontWeight: 'bold' }}>
                      {data?.name} #{data?.order}
                    </Text>

                    <Separator my="3" size="4" />

                    <Flex
                      direction="row"
                      gap="8"
                      align="start"
                      justify={evolutionData?.parsedChain?.length > 1 ? "between" : "start"}
                      className={evolutionData?.parsedChain?.length > 1 ? "w-full" : ""}
                    >
                      <DataListComponent data={data} />
                      <ListAbilitiesComponent data={data} typeColor={pokemonColor?.badge} />
                      {evolutionData?.parsedChain?.length > 1 && (
                        <EvolutionComponent evolutionData={evolutionData} typeColor={pokemonColor?.badge} />
                      )}
                    </Flex>

                  </Flex>

                </Flex>
              </Card>
            )}
          </>
        )
      }
    </>
  );
};
