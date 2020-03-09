export const userDetails = () => {
    return {
        type: 'USER',
    }
}

export const addComment = (comments) => {
    console.log(comments)
    return {
        type: 'COMMENT',
        comments: comments,
    }
}