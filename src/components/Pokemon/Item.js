import React, { Component } from 'react';

import { pad } from '../../Helper';

class Item extends Component {
    render() {
        const data = { ...this.props.data };
        return (
            <div className="item">
                <div class="item_wrapper">
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
