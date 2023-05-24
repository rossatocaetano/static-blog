import { useRouter } from 'next/router';
import data from '../../data.json';

// Função responsável por determinar quais páginas estáticas devem ser geradas durante o build
export async function getStaticPaths() {
  // Mapeando os dados das postagens no arquivo JSON e gerando um array de objetos "params" contendo o ID de cada postagem
  const paths = data.posts.map((currentPost) => {
    return { params: { id: `${currentPost.id}` }};
  });

  return {
    paths: paths, // Array de objetos "params"
    fallback: false, // Se o fallback for definido como "false", IDs não existentes retornarão um erro 404
  };
}

// Função responsável por obter os dados específicos de uma página estática com base nos parâmetros fornecidos
export async function getStaticProps(context){
  const id = context.params.id;

  // Encontrando a postagem correspondente ao ID fornecido no arquivo JSON
  const post = data.posts.find((currentPost) => {
    if(currentPost.id === id) {
      return true;
    }
    return false;
  });

  return {
    props: {
      id: post.id,
      title: post.title,
      author: post.author,
      date: post.date,
      content: post.content,
    },
  };
}

// Componente que será renderizado para exibir os detalhes da postagem
export default function PostByIdScreen(props) {
  const router = useRouter();

  const post = {
    title: props.title,
    author: props.author,
    date: props.date,
    content: props.content,
  };

  // Verificando se a página está sendo carregada de forma assíncrona
  if(router.isFallback) {
    return 'Essa página não existe!';
  }

  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </>
  );
}

