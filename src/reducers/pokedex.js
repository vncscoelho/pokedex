const initialState = {
    caughtPokemon: {}
};

const pokedex = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_POKEMON':
            /* If the Pokemon was caught already, set its ID to false */
            if (state.caughtPokemon[action.newValue] === true) {
                return {
                    ...state,
                    caughtPokemon: {
                        ...state.caughtPokemon,
                        [action.newValue]: false
                    }
                };
            }

            /* If not, push its ID into store */
            return {
                ...state,
                caughtPokemon: {
                    ...state.caughtPokemon,
                    [action.newValue]: true
                }
            };

        default:
            return state;
    }
};

export default pokedex;
