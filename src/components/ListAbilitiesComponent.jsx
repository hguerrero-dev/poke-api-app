import { Badge, Text, Flex } from "@radix-ui/themes";

export const ListAbilitiesComponent = ({ data, typeColor = 'blue' }) => {

    return (
        <Flex gap="3" justify="center" align="center" wrap="wrap" direction="column">
            <Text size="1" color="gray">
                Abilities
            </Text>
            {data?.abilities?.map((abilityInfo, index) => (
                <Badge
                    key={index}
                    color={typeColor}
                    variant="soft"
                >
                    <Text>{abilityInfo.ability.name}</Text>
                </Badge>
            ))}
        </Flex>
    )
}