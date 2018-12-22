import React, { Component } from 'react';

class LoginContainer extends Component {
    render() {
        return (
            <div className="login_container">
                <label className="input-label" htmlFor="">
                    <span className="input-label_text">LOGIN</span>
                    <input class="input" type="text" />
                </label>
                <label className="input-label" htmlFor="">
                    <span className="input-label_text">PASSWORD</span>
                    <input class="input" type="password" />
                </label>
                <button class="button">Login</button>
            </div>
        );
    }
}

export default LoginContainer;
