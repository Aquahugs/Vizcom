## STATE MANAGEMENT 
    - Redux

    - React-Redux
        - Redux stores can be used with any UI layer
            - UI code always subscribes to the store, gets the latest state, and redraws itself
        - React-Redux is the official Redux UI bindings library for React
            - React-Redux is installed as a separate react-redux package
        - The useSelector hook lets React components read data from the store
            - Selector functions take the entire store state as an argument, and return a value based on that state
            - useSelector calls its selector function and returns the result from the selector
            - useSelector subscribes to the store, and re-runs the selector each time an action is dispatched.
            - Whenever the selector result changes, useSelector forces the component to re-render with the new data
            - The useDispatch hook lets React components dispatch actions to the store
        - useDispatch returns the actual store.dispatch function
            - You can call dispatch(action) as needed inside your components
        - The <Provider> component makes the store available to other React components
        - Render <Provider store={store}> around your entire <App>

    - React-Redux Patterns
        - your global state should go in the Redux store, and your local state should stay in React components.
        - Should I put this data in Redux state?
          - Do other parts of the application care about this data?
          - Do you need to be able to create further derived data based on this original data?
          - Is the same data being used to drive multiple components?
          - Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
          - Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
          - Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?
          - Most form state probably shouldn't be kept in Redux. 

    - Async Logic and Data Fetching
        Redux middleware were designed to enable writing logic that has side effects
            - "Side effects" are code that changes state/behavior outside a function, like AJAX calls, modifying function arguments, or generating random values
        Middleware add an extra step to the standard Redux data flow
            - Middleware can intercept other values passed to dispatch
            - Middleware have access to dispatch and getState, so they can dispatch more actions as part of async logic
        The Redux "Thunk" middleware lets us pass functions to dispatch
            - "Thunk" functions let us write async logic ahead of time, without knowing what Redux store is being used
            - A Redux thunk function receives dispatch and getState as arguments, and can dispatch actions like "this data was received from an API response"

## API
    - Rest
        - A REST API is an API that follows what is structured in accordance with the REST Structure for APIs. REST stands for “Representational State Transfer”. It consists of various rules that developers follow when creating APIs.
    - Axios (a promise-based HTTP client)
    - Fetch API (a browser in-built web API).
        - The fetch() API is an inbuilt JavaScript method for getting resources from a server or an API endpoint. It’s similar to XMLHttpRequest, but the fetch API provides a more powerful and flexible feature set.
        - It defines concepts such as CORS and the HTTP Origin header semantics, supplanting their separate definitions elsewhere.
        - The fetch() API method always takes in a compulsory argument, which is the path or URL to the resource you want to fetch. It returns a promise that points to the response from the request, whether the request is successful or not. You can also optionally pass in an init options object as the second argument.
