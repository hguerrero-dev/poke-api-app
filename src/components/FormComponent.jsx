import { Heading, Flex, Select } from "@radix-ui/themes";

export const FormComponent = ({ inputValue,
    setInputValue,
    selectedOption,
    setSelectedOption,
    onSubmit }) => {

    const options = ["pokemon", "ability"];

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    };

    return (
        <Flex
            direction="column"
            gap="4"
            align="center"
            className="pb-8"
        >
            <Heading size="6">Pokedex!!!</Heading>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type a pokemon name"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    className="p-2 border border-gray-300 rounded-md"
                />
            </form>

            <Select.Root
                value={selectedOption}
                onValueChange={setSelectedOption}
            >
                <Select.Trigger />
                <Select.Content>
                    <Select.Group>
                        {
                            options.map((option) => (
                                <Select.Item key={option} value={option}>
                                    {option}
                                </Select.Item>
                            ))
                        }
                    </Select.Group>
                </Select.Content>
            </Select.Root>

        </Flex>
    )
}