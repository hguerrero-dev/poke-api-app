import { Flex, Text } from "@radix-ui/themes"

export const DataListComponent = ({ data }) => {
    return (
        <Flex direction="column" gap="2">
            <Text size="1" color="gray">Info</Text>
            <Flex gap="2" align="center">
                <Text size="2">Weight:</Text>
                <Text size="2" style={{ fontWeight: 'bold' }}>{data?.weight}</Text>
            </Flex>

            <Flex gap="2" align="center">
                <Text size="2">Height:</Text>
                <Text size="2" style={{ fontWeight: 'bold' }}>{data?.height}</Text>
            </Flex>
        </Flex>
    )
}