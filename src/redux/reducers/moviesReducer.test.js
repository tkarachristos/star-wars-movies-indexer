import { moviesReducer } from "./moviesReducer";
import { fetchMoviesSuccess }from "../actions/movies";
import initialState from "./initialState";
import mockData from "../../../tools/mockData";

it("should add movies list to store when passed FETCH_MOVIES_SUCCESS", () => {
  // arrange
  const action = fetchMoviesSuccess(mockData);

  // act
  const newState = moviesReducer(initialState, action);

  // assert
  expect(newState.list.length).toEqual(6);
  expect(newState.list[0].fields.title).toEqual("Episode V - The Empire Strikes Back");
});
