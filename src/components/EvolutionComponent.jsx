import { DataList, Flex, Badge, Text, HoverCard } from '@radix-ui/themes'

export const EvolutionComponent = ({
    evolutionData,
    typeColor = 'purple',
    setInputValue,
    onEvolutionClick
}) => {

    if (!evolutionData || !evolutionData.parsedChain || evolutionData.parsedChain.length <= 1) return null;

    // => Función para obtener la variante según la etapa de evolución
    const getVariantByStage = (index, total) => {
        if (total === 2) {
            return index === 0 ? 'soft' : 'solid';
        }
        if (total === 3) {
            if (index === 0) return 'soft';
            if (index === 1) return 'surface';
            return 'solid';
        }

        // => Para más de 3 evoluciones, gradualmente aumentar la intensidad
        const variants = ['soft', 'soft', 'surface', 'solid'];
        const variantIndex = Math.min(Math.floor((index / (total - 1)) * (variants.length - 1)), variants.length - 1);
        return variants[variantIndex];
    };

    const handleEvolutionClick = (speciesName) => {
        setInputValue(speciesName);
        onEvolutionClick();
    }

    const totalEvolutions = evolutionData.parsedChain.length;

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
                                <HoverCard.Root key={index}>
                                    <HoverCard.Trigger>
                                        <Badge
                                            key={index}
                                            color={typeColor}
                                            variant={getVariantByStage(index, totalEvolutions)}
                                            radius="full"
                                            style={{ fontFamily: '"Pokemon Solid", sans-serif', cursor: 'pointer' }}
                                            className="uppercase"
                                            onClick={() => handleEvolutionClick(speciesName)}
                                        >
                                            {speciesName}
                                        </Badge>
                                    </HoverCard.Trigger>
                                    <HoverCard.Content>
                                        <Text size="2" style={{ fontWeight: 'bold' }}>
                                            Click to search {speciesName}
                                        </Text>
                                    </HoverCard.Content>
                                </HoverCard.Root>
                            ))}
                        </Flex>
                    </DataList.Value>
                </DataList.Item>
            </DataList.Root>
        </>
    )
}