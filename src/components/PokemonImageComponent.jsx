import { Card } from "@radix-ui/themes";

export const PokemonImageComponent = ({ data }) => {

    return (
        <Card className="p-4 flex flex-col items-center">
            <img
                src={data?.sprites?.front_default}
                width="200"
                height="200"
            />
            <img
                src={data?.sprites?.back_default}
                width="200"
                height="200"
                alt={data?.name}
            />
        </Card>
    )
}