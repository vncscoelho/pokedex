import React, { Component } from 'react';
import { pad } from '../../Helper';

class ItemDetail extends Component {
    render() {
        const data = { ...this.props.pokemonData };

        /* Todos os dados incluindo linugas : https://pokeapi.co/api/v2/pokemon-species/1/ */
        /* Dados gerais: https://pokeapi.co/api/v2/pokemon/1/ */
        /* Evolucoes: https://pokeapi.co/api/v2/evolution-chain/1/ */
        /* switch de pokeball */

        return (
            <section className="item-detail_wrapper">
                <div class="item-detail_container">
                    <div className="item-detail_picture">
                        <span />
                        <img src={data.sprite} alt={data.name} />
                    </div>

                    <p className="item-detail_title">
                        <span className="item-detail_entry">
                            #{pad(data.id)}
                        </span>
                        <span class="item-detail_name">{data.name}</span>
                    </p>
                    <p className="item-detail_types">
                        <span className="type">
                            Plant
                            <span
                                role="img"
                                aria-hidden="true"
                                aria-label={data.name}
                                className="icon"
                            >
                                🌿
                            </span>
                        </span>
                        <span className="type">
                            Poison
                            <span
                                role="img"
                                aria-hidden="true"
                                aria-label={data.name}
                                className="icon"
                            >
                                ☠️
                            </span>
                        </span>
                    </p>
                    <p className="item-detail_flavor-text">
                        Bulbasaur can be seen napping in bright sunlight.\nThere
                        is a seed on its back. By soaking up the sun’s
                        rays,\nthe seed grows progressively larger.
                    </p>
                    <button className="button" type="button">
                        <label htmlFor="checkPokemon">
                            <input type="checkbox" id="checkPokemon" />
                        </label>
                        I've caught it!
                    </button>
                </div>
            </section>
        );
    }
}

export default ItemDetail;
