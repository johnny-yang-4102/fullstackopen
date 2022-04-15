const _ = require('lodash')


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

const mostBlogs = (blogs) => {
    //Get amt of blogs for each author --> mapAuthorToBlogs
    //group by author --> map author -> blog () sumBy(# of occurences of author's NAME)
    //Get MAX of the sum in array1 and return

    /*/
                _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
    /*/


    const summedBlogs = _(blogs).groupBy('author').map((objs, key) => 
        ({
            'author': key,
            //What to put here? How to obtain sum when the key's are different?
            'blogs' : Object.values((_.countBy(objs, 'author')))[0]
            
        })
    ).value()

    return _.maxBy(summedBlogs, 'blogs')

    
}

const mostLikes = (blogs) => {
    //Get amt of blogs for each author --> mapAuthorToBlogs
    //group by author --> map author -> blog () sumBy(# of occurences of author's NAME)
    //Get MAX of the sum in array1 and return

    /*/
                _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
    /*/


    const likesCountBlogs = _(blogs).groupBy('author').map((objs, key) => 
        ({
            'author': key,
            //What to put here? How to obtain sum when the key's are different?
            'likes' : _.sumBy(objs, 'likes')
            
        })
    ).value()

    console.log(likesCountBlogs)

    return _.maxBy(likesCountBlogs, 'likes')

    
}
  
module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}