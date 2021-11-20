import { Flex } from "@chakra-ui/layout"
import Header from "../components/Header"
import LoginForm from "../components/LoginForm"

const LoginPage = () => {
    return (
      <>
      <Header/>
      <Flex justify='center' h='auto' w='100%' align='center' mt='40vh' pb='10vh' zIndex='0' flexDirection='column'>
            <LoginForm/>
      </Flex>
      </>
    )
  }
  
  export default LoginPage