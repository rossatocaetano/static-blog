import NextLink from 'next/link'
import data from '../data.json'
import { Container, Title, SubTitle, Background } from '@/styles/sharedstyles';
import { Card, CardId, CardText, Item } from '@/styles/card';

export default function Home() {
  const posts = data.posts;
  return (
    <Background>
      <Container>
        <Title>Blog Estático</Title>
        <SubTitle>Para ler todo dia</SubTitle>
        { posts.map(({id, title, author} ) => (               
            <Card key={id}>            
              <NextLink href={`posts/${id}`} style={{ textDecoration: 'none'}}><CardId>{id}</CardId></NextLink>
              <CardText>
                <NextLink href={`posts/${id}`} style={{ textDecoration: 'none'}}>
                  <Item><span>{title}</span></Item>
                  <Item>{author}</Item>
                </NextLink>
              </CardText>            
            </Card>
        ))}      
      </Container>
    </Background>
  )
}
