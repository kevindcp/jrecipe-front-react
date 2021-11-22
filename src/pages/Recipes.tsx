import { Flex, Grid} from '@chakra-ui/layout'
import RecipeCard from '../components/RecipeCard'
import SectionHeader from '../components/SectionHeader'
import { useAppSelector } from '../hooks/redux'

const RecipesPage = () => {
  const { recipes } = useAppSelector((state => state.recipes))
  
  return (
    <Flex justify='center' h='auto' w='100%' align='center' pt='8vh' pb='3vh' zIndex='0' flexDirection='column'>
      <SectionHeader name='Recipes'/>
      <Grid columnGap='20px' rowGap='20px' gridAutoFlow='row' templateColumns='repeat(auto-fill, minmax(max(300px, 20%), 1fr))' h='100%' w='90%' justifyContent='center'>
        {recipes.map((recipe, index) => {
          return (<RecipeCard key={recipe.id} {...recipe} link={`/recipes/${index + 1}`}/>)
        })}
      </Grid>
    </Flex>
  )
}

export default RecipesPage
