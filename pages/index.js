import NextLink from 'next/link'
import data from '../data.json'

export default function Home() {
  const posts = data.posts;
  return (
    <>
      <h1>Blog Estático</h1>
      <p>Para ler todo dia</p>
      { posts.map(({id, title, author} ) => (
        <NextLink href={`posts/${id}`}>
          <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{author}</li>
          </ul>
        </NextLink>
      ))}
      
    </>
  )
}
