import React, { Component } from 'react';

import { pad } from '../../Helper';

import ItemDetail from './ItemDetail';

import { connect } from 'react-redux';

class Item extends Component {
    state = {
        showDetail: false
    };

    toggleDetail = () => {
        this.setState({ showDetail: !this.state.showDetail });
    };

    render() {
        const { data, pokedex } = this.props;

        return (
            <div className="item">
                {this.state.showDetail === true ? (
                    <ItemDetail
                        pokemonData={data}
                        closeHandler={this.toggleDetail}
                    />
                ) : null}
                <div
                    className="item_wrapper"
                    onClick={() => this.toggleDetail()}
                >
                    <span className="item_entry">{pad(data.id)}</span>
                    <img
                        src={data.sprite}
                        alt={data.name}
                        className={
                            'item_img pkm-status' +
                            (pokedex[data.id] === true ? ' caught' : '')
                        }
                    />
                    <p className="item_title">{data.name}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    pokedex: store.pokedex.caughtPokemon
});

export default connect(mapStateToProps)(Item);
