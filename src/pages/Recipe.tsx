import { Flex} from '@chakra-ui/layout'
import Header from '../components/Header'
import Recipe from '../components/Recipe'

const recipe = {
  id: 1,
  title: 'Pasta Carbonara',
  cookTime: 10,
  prepTime: 30,
  ingredients: 'ing1/ing2/ing3',
  steps: 'st1/st2/st3dasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss das sssssssssssssssssssssssssssssssssssssssssssssssssssssssss asssssssssssssssssssssssssssss adsdk ashdsjkdhs kjhdsssssssssdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdss adsh djksdsdsdsdddddddddddddddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdd daskjhdskhjdsssssssssssssssssssssss dasjkhhhhhhhhhhhhhhhhhhh asdkjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh daskjhhhhhhhhhhhhhhhhhhhhh',
  category: 'Pasta',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg'
}


const RecipePage = () => {
  return (
    <>
    <Flex justify='center' h='auto' w='100%' align='center' mt='8vh' pb='10vh' zIndex='0' flexDirection='column'>
          <Recipe {...recipe}/>
    </Flex>
    </>
  )
}

export default RecipePage
