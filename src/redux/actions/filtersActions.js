export const setCategory = (index) => ({
    type: 'SET_CATEGORY',
    payload: index,
})

export const setSortBy = ({type, order}) => ({
    type: 'SET_SORT_BY',
    payload: {type, order},
})
