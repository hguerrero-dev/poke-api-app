import { useEffect, useState } from "react"
import { Card, DataList, Text, Flex, Separator } from "@radix-ui/themes";
import { FormComponent } from "./components/FormComponent";
import { PokemonImageComponent } from "./components/PokemonImageComponent";
import { ListAbilitiesComponent } from "./components/ListAbilitiesComponent";

export const App = () => {

  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("pokemon");

  const fetchData = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/${selectedOption}/${inputValue}`
    );
    const dataResponse = await response.json();
    console.log(dataResponse);
    setData(dataResponse);  
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Card className="m-4 p-6">

        <FormComponent
          inputValue={inputValue}
          setInputValue={setInputValue}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          onSubmit={fetchData}
        />
        {
          data && (
            <>
              {/* CONTENEDOR PRINCIPAL (COLUMN) */}
              <Flex
                direction="column"
                gap="6"
                align="center"
                className="p-4 w-full"
              >

                <PokemonImageComponent data={data} />

                <Flex direction="column" gap="4" align="center" className="w-full">
                  <Text size="6">
                    {data?.name} #{data?.order}
                  </Text>

                  <Separator my="3" size="4" />

                  <DataList.Root>
                    <DataList.Item>
                      <DataList.Label>Weight</DataList.Label>
                      <DataList.Value>{data?.weight}</DataList.Value>
                    </DataList.Item>

                    <DataList.Item>
                      <DataList.Label>Height</DataList.Label>
                      <DataList.Value>{data?.height}</DataList.Value>
                    </DataList.Item>
                  </DataList.Root>

                  {/* ABILITIES */}
                  <ListAbilitiesComponent data={data} />
                </Flex>
              </Flex>
            </>
          )
        }
      </Card>
    </>
  );
};
