import React, { Component } from 'react';
import Item from './Item';

class Container extends Component {
    state = {
        pokemon: []
    };

    componentDidMount() {
        this.getPokemonListFromAPI();
    }

    /* Get Pokemon from API and load into state */
    getPokemonListFromAPI = async () => {
        return await fetch(
            'http://pokeapi.salestock.net/api/v2/pokemon/?limit=151'
        )
            .then(response => response.json())
            .then(data => {
                data.results.map((pokemon, key) => {
                    /* Match IDs to their official "Entry in Pokedex" */
                    key += 1;

                    pokemon.id = key;

                    pokemon.sprite =
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                        key +
                        '.png';

                    return pokemon;
                });

                this.setState({
                    pokemon: data.results
                });
            });
    };

    setPokemonList = pokemonList =>
        pokemonList.map(item => <Item data={item} key={item.id} />);

    render() {
        return (
            <div className="pokemon_container">
                {this.setPokemonList(this.state.pokemon)}
            </div>
        );
    }
}

export default Container;
