import { Badge, Text, Flex } from "@radix-ui/themes";

export const ListAbilitiesComponent = ({ data }) => {

    const colors = ["red", "blue", "green", "yellow", "purple"];

    return (
        <Flex gap="3" justify="center" align="center" wrap="wrap" direction="column">
            <Text size="1" color="gray">
                Abilities
            </Text>
            {data?.abilities?.map((abilityInfo) => (
                <Badge
                    color={
                        colors[Math.floor(Math.random() * colors.length)]
                    }
                >
                    <Text>{abilityInfo.ability.name}</Text>
                </Badge>
            ))}
        </Flex>
    )
}