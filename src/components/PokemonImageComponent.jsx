import { useRef, useEffect } from "react";
import { Card, Flex } from "@radix-ui/themes";

export const PokemonImageComponent = ({ data }) => {

    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current && data?.cries?.latest) {
            audioRef.current.play();
        }
    }, [data]);

    return (
        <Card className="p-4 bg-[#3DD68C]" radius="large" shadow="large">
            <Flex direction="row" align="center">
                <img
                    src={data?.sprites?.front_default}
                    width="200"
                    height="200"
                />
                <img
                    src={data?.sprites?.back_default}
                    width="200"
                    height="200"
                />
            </Flex>
            <audio ref={audioRef} src={data?.cries?.latest} />
        </Card>
    )
}