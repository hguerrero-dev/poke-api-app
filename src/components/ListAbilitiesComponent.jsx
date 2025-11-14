import { Badge, Card, Text, Flex } from "@radix-ui/themes";

export const ListAbilitiesComponent = ({ data }) => {

    const colors = ["red", "blue", "green", "yellow", "purple"];

    return (
        <Flex gap="3" wrap="wrap" justify="center">
            {data?.abilities?.map((abilityInfo) => (
                <Card key={abilityInfo.ability.name} className="p-2">
                    <Badge
                        color={
                            colors[Math.floor(Math.random() * colors.length)]
                        }
                    >
                        <Text>{abilityInfo.ability.name}</Text>
                    </Badge>
                </Card>
            ))}
        </Flex>
    )
}