import { ChakraProvider, Box, Input, InputGroup, InputLeftElement, Button, VStack, HStack, Text } from '@chakra-ui/react';
import { MdOutlineMail, MdKey } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Login(){
    return(
      <ChakraProvider>
      <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" bg="gray.100">
          
          <HStack spacing={8} bg="white"  borderRadius="md" boxShadow="md" maxWidth="800px" height="400px" p={6}>
            <VStack spacing={4} width="50%" >
              <Text fontSize='3xl'>LoginJWT</Text>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <MdOutlineMail color='gray' />
                </InputLeftElement>
                <Input type="email" placeholder='E-mail' aria-label='E-mail' />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <MdKey color='gray' />
                </InputLeftElement>
                <Input placeholder='Senha' />
              </InputGroup>
              
                <Button colorScheme="blue" size="md">Entrar</Button>
                <Box textAlign="center">
                   <Text>Não tem uma conta?</Text>
                   <Link to={`register`} color="blue.500"><Text color="blue.500">Clique aqui</Text></Link>
                </Box>
              
            </VStack>
              <VStack width="50%" alignItems="flex-start" justifyContent="center" spacing={4}>
              <Text fontSize="lg" fontWeight="bold">O que é isso?</Text>
              <Text>LoginJWT é um projeto simples que surgiu com o objetivo de colocar em prática todas as boas práticas (que eu conheço) na criação de um sistema de autenticação.</Text>
              <Link to={`about`} color="blue.500"><Text color="blue.500">Saiba mais</Text></Link>
          </VStack>
          </HStack>
        
      </Box>
    </ChakraProvider>
    )
  }