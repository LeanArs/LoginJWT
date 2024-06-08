import { ChakraProvider, Box, Input, InputGroup, InputLeftElement, Button, VStack, HStack, Text } from '@chakra-ui/react';
import { MdOutlineMail, MdKey, MdPersonOutline, MdCheck } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Login(){
    return(
      <ChakraProvider>
      <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" bg="gray.100">
          <HStack spacing={8} bg="white"  borderRadius="md" boxShadow="md" maxWidth="800px" height="50vh" p={6}>
            <VStack spacing={4}>
              <Text fontSize='3xl'>Cadastre-se</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <MdPersonOutline color='gray' />
                </InputLeftElement>
                <Input placeholder='Nome' />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <MdOutlineMail color='gray' />
                </InputLeftElement>
                <Input placeholder='E-mail' />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <MdKey color='gray' />
                </InputLeftElement>
                <Input placeholder='Senha' />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <MdCheck color='gray' />
                </InputLeftElement>
                <Input placeholder='Confirmação de Senha' />
              </InputGroup>
              <Button colorScheme="blue" size="md">Cadastrar</Button>
              <Link to={`/`}>Já tenho uma conta.</Link>
            </VStack>
          </HStack>
      </Box>
    </ChakraProvider>
    )
  }