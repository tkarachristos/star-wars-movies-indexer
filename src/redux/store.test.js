import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import initialState from "./reducers/initialState";
import mockData from "../../tools/mockData";
import { fetchMoviesSuccess } from "./actions/movies";

it("Should handle fetching movies", function() {
  // arrange
  const store = createStore(rootReducer, initialState);

  // act
  const action = fetchMoviesSuccess(mockData);
  store.dispatch(action);

  // assert
  const firstMovie = store.getState().movies.list[0];
  expect(firstMovie).toEqual(mockData[0]);
});
