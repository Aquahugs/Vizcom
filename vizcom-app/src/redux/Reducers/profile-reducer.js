/* eslint-disable default-case */
export const ProfileActions = {
    Example: 'LOREM_IPSUM',
}

export const defaultState = {

}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case ProfileActions.Example:
        return {
            ...state,
            Example2: null
        }
    }
    return state
}

export default reducer