import { Flex} from '@chakra-ui/layout'
import Recipe from '../components/Recipe'
import { useAppSelector } from '../hooks/redux'
import { useParams } from 'react-router-dom'

const RecipePage = () => {
  
  const { recipes } = useAppSelector((state => state.recipes))
  const { id } = useParams()
  return (
    <>
    <Flex justify='center' h='auto' w='100%' align='center' mt='8vh' pb='10vh' zIndex='0' flexDirection='column'>
          <Recipe {...recipes[Number(id)-1]}/>
    </Flex>
    </>
  )
}

export default RecipePage
