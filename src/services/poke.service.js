const API = 'https://pokeapi.co/api/v2/'

const namePakemons = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charizard', 'weedle']
export const PokeService = {
    async getInfoPokemon(name) {
        try {
            const promises = namePakemons.map(name => fetch(API + `pokemon/${name}`, {
                cache: 'force-cache',
            }).then(response => response.json()));

            const results = await Promise.all(promises);

            return results;
        }catch (error){
            console.error('Failed to fetch objects:', error);
        }
    }
}