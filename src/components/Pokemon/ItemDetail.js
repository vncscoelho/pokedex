import React, { Component } from 'react';
import { pad } from '../../Helper';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPokemon } from '../../actions/';

class ItemDetail extends Component {
    state = {
        jpName: '',
        flavorText: '',
        types: []
    };

    getSpeciesData = async id => {
        return await fetch(
            'https://pokeapi.co/api/v2/pokemon-species/' + id + '/'
        )
            .then(response => response.json())
            .then(data => {
                const flavorText = data.flavor_text_entries.filter(
                    value => value.language.name === 'en'
                );

                this.setState({
                    jpName: data.names[0].name,
                    flavorText: flavorText[0].flavor_text
                });
            });
    };

    getPokemonStats = async id => {
        return await fetch('https://pokeapi.co/api/v2/pokemon/' + id + '/')
            .then(response => response.json())
            .then(data => {
                const pokemonTypes = data.types.map(value => value.type.name);

                this.setState({
                    types: pokemonTypes
                });
            });
    };

    setTypes = types => {
        return types.map(type => (
            <span className="type" key={type}>
                {type}
                <span className="icon">
                    <span
                        role="img"
                        aria-hidden="true"
                        aria-label={type}
                        className={type}
                    />
                </span>
            </span>
        ));
    };

    componentDidMount() {
        this.getPokemonStats(this.props.pokemonData.id);
        this.getSpeciesData(this.props.pokemonData.id);
    }

    render() {
        const data = { ...this.props.pokemonData };

        const { addPokemon, pokedex } = this.props;

        /* Todos os dados incluindo linugas : https://pokeapi.co/api/v2/pokemon-species/1/ */
        /* Dados gerais: https://pokeapi.co/api/v2/pokemon/1/ */
        /* Evolucoes: https://pokeapi.co/api/v2/evolution-chain/1/ */
        /* switch de pokeball */
        /* emoji cainho no bg */

        return (
            <section className="item-detail_wrapper">
                <div className="item-detail_container">
                    <div className="item-detail_picture">
                        <img src={data.sprite} alt={data.name} />
                    </div>
                    <p className="item-detail_title">
                        <span className="item-detail_entry">
                            #{pad(data.id)}
                        </span>
                        <span className="item-detail_name">{data.name}</span>
                        <span className="item-detail_jpName">
                            {this.state.jpName}
                        </span>
                    </p>
                    <p className="item-detail_types">
                        {this.setTypes(this.state.types)}
                    </p>
                    <p className="item-detail_flavor-text">
                        {this.state.flavorText}
                    </p>
                    <button
                        className={
                            'button ' +
                            (pokedex[data.id] === true ? 'caught' : '')
                        }
                        type="button"
                        onClick={() => addPokemon(data.id)}
                    >
                        I've caught it!
                    </button>
                </div>
            </section>
        );
    }
}

const mapStateToProps = store => ({
    pokedex: store.pokedex.caughtPokemon
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ addPokemon }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemDetail);
