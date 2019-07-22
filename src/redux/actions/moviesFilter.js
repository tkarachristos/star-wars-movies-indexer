export const SET_TEXT_FILTER = "SET_TEXT_FILTER";
export const SET_SORT_FILTER = "SET_SORT_FILTER";

export function textFilterChange(searchText) {
    return {
        type: SET_TEXT_FILTER,
        searchText : searchText
    }
}

export function sortByChange(sortBy) {
    return {
        type: SET_SORT_FILTER,
        sortBy: sortBy
    }
}
