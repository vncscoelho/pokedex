import React, { Component } from 'react';

import { pad } from '../../Helper';

import ItemDetail from './ItemDetail';

class Item extends Component {
    state = {
        showDetail: false
    };

    toggleDetail = () => {
        this.setState({ showDetail: !this.state.showDetail });
    };

    render() {
        const { data } = { ...this.props };

        return (
            <div className="item" onClick={() => this.toggleDetail()}>
                <div className="item_wrapper">
                    {data.id === 1 ? <ItemDetail pokemonData={data} /> : null}

                    <span className="item_entry">{pad(data.id)}</span>
                    <img
                        src={data.sprite}
                        alt={data.name}
                        className="item_img"
                    />
                    <p className="item_title">{data.name}</p>
                </div>
            </div>
        );
    }
}

export default Item;
