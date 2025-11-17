import { useRef, useEffect } from "react";
import { Card, Flex } from "@radix-ui/themes";

export const PokemonImageComponent = ({ data, typeColor = '#A8A878' }) => {

    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current && data?.cries?.latest) {
            audioRef.current.play();
        }
    }, [data]);

    return (
        <Card 
            className="p-4" 
            radius="large" 
            style={{ 
                backgroundColor: typeColor,
                boxShadow: `0 8px 32px ${typeColor}40`
            }}
        >
            <Flex direction="row" align="center" gap="4">
                <img
                    src={data?.sprites?.front_default}
                    width="200"
                    height="200"
                    alt={`${data?.name} front`}
                />
                <img
                    src={data?.sprites?.back_default}
                    width="200"
                    height="200"
                    alt={`${data?.name} back`}
                />
            </Flex>
            <audio ref={audioRef} src={data?.cries?.latest} />
        </Card>
    )
}