export const userDetails = () => {
    return {
        type: 'USER',
    }
}

export const addComment = (comments) => {
    // console.log(comments)
    return {
        type: 'COMMENT',
        comments: comments,
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        users: users
    }
}

export const fetchUsersError = (error) => {
    return {
        type: 'FETCH_USERS_ERROR',
        error: error
    }
}
