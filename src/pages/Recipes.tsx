import { Flex, Box, Grid} from '@chakra-ui/layout'
import RecipeCard from '../components/RecipeCard'
import Header from '../components/Header'
import SectionHeader from '../components/SectionHeader'

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

const RecipesPage = () => {
  return (
    <>
    <Header/>
    <Flex justify='center' h='auto' w='100%' align='center' pt='8vh' pb='3vh' zIndex='0' flexDirection='column'>
      <SectionHeader name='Recipes'/>
      <Grid columnGap='20px' rowGap='20px' gridAutoFlow='row' templateColumns='repeat(auto-fill, minmax(max(300px, 20%), 1fr))' h='100%' w='90%' justifyContent='center'>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe2}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe2}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe2}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe2}/>
      </Grid>
    </Flex>
    </>
  )
}

export default RecipesPage
