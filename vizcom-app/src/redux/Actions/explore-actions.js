import apiClient from '../../utils/api/explore-service'
import { ExploreActions } from '../Reducers/explore-reducer.js'

// can make async calls here
// sample call
// const callForData = (dispatch, start, end, loadedAction, failedAction) => axios
//     .get(`/api/metric/cc?startDate=${start.toJSON()}&endDate=${end.toJSON()}`)
//     .then((res) => dispatch({ type: loadedAction, payload: res.data[0] }))
//     .catch((err) => dispatch({ type: failedAction, payload: err.message }))

// sample action
export const sampleAction = (dispatch) => (foo) => {
    dispatch({ type: ExploreActions.Example })
    return callForData(
        dispatch,
        foo,
    )
}


}