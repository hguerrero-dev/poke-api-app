import { Heading, Flex, Select, TextField, Button, Card } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const FormComponent = ({
    inputValue,
    setInputValue,
    selectedOption,
    setSelectedOption,
    onSubmit,
    onClear
}) => {

    const options = ["pokemon", "ability"];

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    };

    return (
        <Card className="mx-auto my-8 px-8 py-16 max-w-2xl bg-white/90 backdrop-blur-sm shadow-xl">
            <Flex
                direction="column"
                gap="4"
                align="center"
            >
                <Heading 
                    size="8" 
                    style={{ 
                        fontFamily: '"Pokemon Solid", sans-serif'
                    }}
                    className="text-4xl uppercase"
                >
                    <span style={{ color: '#FFCB05' }}>P</span>
                    <span style={{ color: '#3D7DCA' }}>o</span>
                    <span style={{ color: '#FFCB05' }}>k</span>
                    <span style={{ color: '#3D7DCA' }}>e</span>
                    <span style={{ color: '#FFCB05' }}>A</span>
                    <span style={{ color: '#3D7DCA' }}>P</span>
                    <span style={{ color: '#FFCB05' }}>I</span>
                </Heading>

                <form onSubmit={handleSubmit}>
                    <Flex gap="2" align="center">
                        <TextField.Root
                            placeholder="Type a pokemon name"
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                            size="3"
                        >
                            <TextField.Slot>
                                <MagnifyingGlassIcon height="16" width="16" />
                            </TextField.Slot>
                        </TextField.Root>

                        <Select.Root
                            value={selectedOption}
                            onValueChange={setSelectedOption}
                            size="3"
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

                        <Button type="submit" size="3">
                            Search
                        </Button>

                        <Button
                            type="button"
                            onClick={() => {
                                onClear();
                                setInputValue("");
                            }}
                            size="3"
                            variant="soft"
                        >
                            Clear
                        </Button>
                    </Flex>
                </form>
            </Flex>
        </Card>
    )
}