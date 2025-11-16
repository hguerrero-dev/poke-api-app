export const useEvolutionPokemonApi = () => {
    const fetchEvolutionData = async (evolutionUrl) => {
        if (!evolutionUrl) return null;
        
        try {
            const response = await fetch(evolutionUrl);

            if (!response.ok) throw new Error("Failed to fetch evolution data");
            const data = await response.json();

            const evolutionChainUrl = data.evolution_chain.url;
            
            const evolutionResponse = await fetch(evolutionChainUrl);

            if (!evolutionResponse.ok) throw new Error("Failed to fetch evolution chain data");
            
            const dataEvolution = await evolutionResponse.json();

            const parseEvolutionChain = (chain) => {
                const evolutions = [];
                let currentStage = chain;

                while (currentStage) {
                    const speciesName = currentStage.species.name;
                    evolutions.push(speciesName);
                    if (currentStage.evolves_to.length > 0) {
                        currentStage = currentStage.evolves_to[0];
                    } else {
                        currentStage = null;
                    }
                }

                return evolutions;
            }

            dataEvolution.parsedChain = parseEvolutionChain(dataEvolution.chain);

            return dataEvolution;

        } catch (error) {
            console.error(error);
            return null;
        }
    }

    return { fetchEvolutionData };
}