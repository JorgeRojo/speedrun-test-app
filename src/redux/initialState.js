const initialState = {
    entities: {
        games: {
            data: [],
            fetchError: false,
            isFetching: false,
        }, 
        runs: {
            data: [],
            fetchError: false,
            isFetching: false,
        },
        players: {
            data: [],
            fetchError: false,
            isFetching: false,
        },
    }
}

export default initialState;