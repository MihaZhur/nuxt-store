import axios from 'axios'



export default defineEventHandler( async (event) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    console.log( data.posts)
    const postsSet = data.map((post: { title: string; id: any; }) => {
        return  {
            ...post,
            title: post.title + ` ${post.id}`
        }
    })
    return {
        posts: postsSet
    };
});
