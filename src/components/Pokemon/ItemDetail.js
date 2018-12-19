import React, { Component } from 'react';
import { pad } from '../../Helper';

class ItemDetail extends Component {
    render() {
        const data = { ...this.props.pokemonData };

        /* Todos os dados incluindo linugas : https://pokeapi.co/api/v2/pokemon-species/1/ */
        /* Dados gerais: https://pokeapi.co/api/v2/pokemon/1/ */
        /* Evolucoes: https://pokeapi.co/api/v2/evolution-chain/1/ */

        return (
            <div className="item-detail_wrapper">
                <div class="item-detail_container">
                    <img
                        src={data.sprite}
                        alt={data.name}
                        className="item_img"
                    />
                    <div className="item-detail_title">{data.name}</div>
                    <div className="item-detail_title">#{pad(data.id)}</div>
                </div>
            </div>
        );
    }
}

export default ItemDetail;
