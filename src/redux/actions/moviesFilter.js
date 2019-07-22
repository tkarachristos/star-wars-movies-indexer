export const ACTIONS = {
    SET_TEXT_FILTER: "SET_TEXT_FILTER",
    SET_SORT_FILTER: "SET_SORT_FILTER"
}

export function textFilterChange(searchText) {
    return {
        type: ACTIONS.SET_TEXT_FILTER,
        searchText : searchText
    }
}

export function sortByChange(sortBy) {
    return {
        type: ACTIONS.SET_SORT_FILTER,
        sortBy: sortBy
    }
}
