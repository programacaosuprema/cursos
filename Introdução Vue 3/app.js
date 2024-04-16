const app = Vue.createApp({
    data(){
        return {
            tipos: [
                {id: 1, nome: 'Planta', vantagens: ['Terrestre', 'Pedra', 'Água'], fraquezas: ['Inseto', 'Fogo', 'Voador', 'Gelo', 'Venenoso'], imunidades: 'Nenhuma'},
                {id: 2, nome: 'Fogo', vantagens: ['Inseto', 'Planta', 'Gelo', 'Aço'], fraquezas: ['Pedra', 'Terrestre', 'Água'], imunidades: 'Nenhuma'},
                {id: 3, nome: 'Água', vantagens: ['Fogo', 'Terrestre', 'Pedra'], fraquezas: ['Elétrico', 'Planta'], imunidades: 'Nenhuma'},
                {id: 4, nome: 'Elétrico', vantagens: ['Água', 'Voador'], fraquezas: ['Terrestre'], imunidades: 'Nenhuma'},
                {id: 5, nome: 'Voador', vantagens: ['Inseto', 'Lutador', 'Planta'], fraquezas: ['Elétrico', 'Gelo', 'Pedra'], imunidades: 'Terrestres'},
                {id: 6, nome: 'Terrestre', vantagens: ['Elétrico', 'Fogo', 'Venenoso', 'Pedra', 'Aço'], fraquezas: ['Gelo', 'Planta ', 'Água'], imunidades: 'Elétrico'},
                {id: 7, nome: 'Normal', vantagens: [], fraquezas: ['Lutador'], imunidades: 'Fantasmas'}
            ],
            pokemons: [
                {id: 1, nome: 'Bulbassauro', tipo: 1, img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'},
                {id: 2, nome: 'Charmander', tipo: 2, img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'},
                {id: 3, nome: 'Squirtle', tipo: 3, img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'},
                {id: 4, nome: 'Pikachu', tipo: 4, img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'},
                {id: 5, nome: 'Pidgey', tipo: 5, img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'},
                {id: 6, nome: 'Sandshrew', tipo: 6, img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png'},
                {id: 7, nome: 'Rattata', tipo: 7, img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png'}
            ]
        }
    }
})