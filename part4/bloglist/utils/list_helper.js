
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {

    const reducer = (sum, current) => {
        return sum += current.likes
    }

    //const total = parts.reduce((sum, current) => ({ exercises: sum.exercises + current.exercises })).exercises

    
    return blogs.length === 0
        ? 0
        : blogs.reduce(reducer, 0)

}

const favoriteBlog = (blogs) => {
    return blogs.reduce((max, blog) => ((max.likes > blog.likes) ? max : blog))
}
  
module.exports = {
    dummy, totalLikes, favoriteBlog
}