import { Card, Flex, Text, Badge } from "@radix-ui/themes"

export const PokemonByAbilityComponent = ({ abilityData }) => {
    return (
            <Card className="p-4 bg-[#FFD86F]" radius="large" shadow="large">
                <Flex direction="column" gap="4" align="center">
                    <Text 
                        size="5" 
                        style={{ 
                            fontFamily: '"Pokemon Solid", sans-serif',
                            fontWeight: 'bold'
                        }} 
                        className="uppercase"
                    >
                        Ability: {abilityData?.name}
                    </Text>

                    <Flex direction="row" gap="3" wrap="wrap" justify="center">
                        {abilityData?.pokemon?.map((pokeEntry, index) => (
                            <Badge
                                key={index}
                                color="blue"
                                variant="soft"
                                radius="full"
                                style={{ fontFamily: '"Pokemon Solid", sans-serif' }}
                                className="uppercase"
                            >
                                {pokeEntry.pokemon.name}
                            </Badge>
                        ))}
                    </Flex>
                </Flex>
            </Card>
    )
}