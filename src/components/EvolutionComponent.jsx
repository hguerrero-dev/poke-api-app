import { DataList, Flex, Badge, Text } from '@radix-ui/themes'

export const EvolutionComponent = ({ evolutionData }) => {
    
    if (!evolutionData || !evolutionData.parsedChain || evolutionData.parsedChain.length <= 1) return null;

    return (
        <>
            <DataList.Root>
                <DataList.Item align="center">
                    <DataList.Value>
                        <Flex gap="2" direction="column">
                            <Text 
                                size="1" 
                                color="gray" 
                                style={{ fontFamily: '"Pokemon Solid", sans-serif' }}
                                className="uppercase"
                            >
                                Evolution Chain
                            </Text>
                            {evolutionData.parsedChain.map((speciesName, index) => (
                                <Badge
                                    key={index}
                                    color="purple"
                                    variant="soft"
                                    radius="full"
                                    style={{ fontFamily: '"Pokemon Solid", sans-serif' }}
                                    className="uppercase"
                                >
                                    {speciesName}
                                </Badge>
                            ))}
                        </Flex>
                    </DataList.Value>
                </DataList.Item>
            </DataList.Root>
        </>
    )
}