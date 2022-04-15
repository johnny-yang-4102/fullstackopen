const listHelper =require('../utils/list_helper')

test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe('total likes', () => {

    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]

    const listWithMultipleBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        },
        {
            _id: '84921u28hf9811',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 15,
            __v: 0
        },
        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 21,
            __v: 0
        }
    ]

    test('of empty list is zero', () => {
        const result = listHelper.totalLikes([])

        expect(result).toBe(0)
    })

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)

        expect(result).toBe(5)
    })

    test('of a bigger list that is calculated right', () => {
        const result = listHelper.totalLikes(listWithMultipleBlogs)

        expect(result).toBe(41)
    })

})

describe('max likes', () => {

    const listWithMultipleBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Canonical string reduction',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 12,
            __v: 0
        },
        {
            _id: '84921u28hf9811',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 15,
            __v: 0
        },
        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 1,
            __v: 0
        }
    ]

    test('of edsger max blog likes', () => {
        const result = listHelper.favoriteBlog(listWithMultipleBlogs)

        expect(result).toEqual({
            _id: '84921u28hf9811',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 15,
            __v: 0
        })
    })


})

describe('most blogs', () => {

    const listWithMultipleBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Canonical string reduction',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 12,
            __v: 0
        },
        {
            _id: '84921u28hf9811',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 15,
            __v: 0
        },
        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 1,
            __v: 0
        },

        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'johnny yang',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 1,
            __v: 0
        },

        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'johnny yang',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 1,
            __v: 0
        },

        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'abraham lincoln',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 1,
            __v: 0
        },

        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'abraham lincoln',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 1,
            __v: 0
        },

        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'abraham lincoln',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 1,
            __v: 0
        },

        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'abraham lincoln',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 1,
            __v: 0
        }
    ]

    test('of abraham lincoln', () => {
        const result = listHelper.mostBlogs(listWithMultipleBlogs)

        expect(result).toEqual({
            author: 'abraham lincoln',
            blogs: 4
        })
    })


})

describe('most likes', () => {

    const listWithMultipleBlogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Canonical string reduction',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 12,
            __v: 0
        },
        {
            _id: '84921u28hf9811',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 15,
            __v: 0
        },
        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 1,
            __v: 0
        },

        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'johnny yang',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 571,
            __v: 0
        },

        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'johnny yang',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 1000,
            __v: 0
        },

        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'abraham lincoln',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 2121,
            __v: 0
        },

        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'abraham lincoln',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 10,
            __v: 0
        },

        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'abraham lincoln',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 10,
            __v: 0
        },

        {
            _id: '4921r19hf131',
            title: 'Go To Statement Considerd ydfya',
            author: 'abraham lincoln',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 10,
            __v: 0
        }
    ]

    test('of abraham lincoln', () => {
        const result = listHelper.mostLikes(listWithMultipleBlogs)

        expect(result).toEqual({
            author: 'abraham lincoln',
            likes: 2151
        })
    })


})