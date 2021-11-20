import { Flex, Box, Grid} from '@chakra-ui/layout'
import CategoryCard from './components/CategoryCard'
import Recipe from './components/Recipe'
import RecipeCard from './components/RecipeCard'
import RecipeForm from './components/RecipeForm'
import RegisterForm from './components/RegisterForm'
import Header from './components/Header'
import Menu from './components/Menu'

const recipe = {
  id: 1,
  title: 'Pasta Carbonara',
  cookTime: 10,
  prepTime: 30,
  ingredients: 'ing1/ing2/ing3',
  steps: 'st1/st2/st3dasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss das sssssssssssssssssssssssssssssssssssssssssssssssssssssssss asssssssssssssssssssssssssssss adsdk ashdsjkdhs kjhdsssssssssdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdss adsh djksdsdsdsdddddddddddddddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdd daskjhdskhjdsssssssssssssssssssssss dasjkhhhhhhhhhhhhhhhhhhh asdkjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh daskjhhhhhhhhhhhhhhhhhhhhh',
  category: 'Pasta',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg',
  link: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg'
}
const recipe2 = {
  id: 2,
  title: 'Pasta Carbonara',
  cookTime: 10,
  prepTime: 30,
  ingredients: 'ing1/ing2/ing3',
  steps: 'st1/st2/st3dasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss das sssssssssssssssssssssssssssssssssssssssssssssssssssssssss asssssssssssssssssssssssssssss adsdk ashdsjkdhs kjhdsssssssssdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdss adsh djksdsdsdsdddddddddddddddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdd daskjhdskhjdsssssssssssssssssssssss dasjkhhhhhhhhhhhhhhhhhhh asdkjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh daskjhhhhhhhhhhhhhhhhhhhhh',
  category: 'Pasta',
  image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/FrenchToast.JPG',
  link: 'https://upload.wikimedia.org/wikipedia/commons/4/42/FrenchToast.JPG'
}

const category = {
    id: 1,
    name: 'Pasta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg',
    link: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg'
}

const category2 = {
  id: 1,
  name: 'Pasta',
  image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/FrenchToast.JPG',
  link: 'https://upload.wikimedia.org/wikipedia/commons/4/42/FrenchToast.JPG'
}

const App = () => {
  return (
    <>
    <Header/>
    
    <Flex justify='center' h='auto' w='100%' align='center' pt='20vh' pb='20vh' zIndex='0'>
      <Grid columnGap='20px' rowGap='20px' gridAutoFlow='row' templateColumns='repeat(auto-fill, minmax(auto, 300px))' h='100%' w='90%' justifyContent='center'>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe2}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe2}/>
        <RecipeCard {...recipe}/>
        
        <CategoryCard {...category}/>
        <RecipeCard {...recipe2}/>
        <CategoryCard {...category2}/>
      </Grid>
    </Flex>
    </>
  )
}

export default App
