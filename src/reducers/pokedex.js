const initialState = {
    caughtPokemon: {}
};

const pokedex = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_POKEMON':
            if (state.caughtPokemon[action.newValue] === true) {
                return {
                    ...state,
                    caughtPokemon: {
                        ...state.caughtPokemon,
                        [action.newValue]: false
                    }
                };
            }
            console.log('A');
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
