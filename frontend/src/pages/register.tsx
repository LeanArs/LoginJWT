import { useState } from 'react';
import { ChakraProvider, Box, Input, InputGroup, InputLeftElement, Button, VStack, Text, FormControl, FormLabel, Center } from '@chakra-ui/react';
import { MdOutlineMail, MdKey, MdPersonOutline, MdCheck } from "react-icons/md";
import { Link } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setError('');

  };

  return (
    <ChakraProvider>
      <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" bg="gray.100">
        <Box bg="white" borderRadius="md" boxShadow="md" maxWidth="400px" width="100%" p={6}>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <Text fontSize='3xl' mb={4}>Cadastre-se</Text>
              <FormControl id="name" isInvalid={!!error && !formData.name}>
                <FormLabel>Nome</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <MdPersonOutline color='gray' />
                  </InputLeftElement>
                  <Input name="name" placeholder='Nome' value={formData.name} onChange={handleChange} />
                </InputGroup>
              </FormControl>
              <FormControl id="email" isInvalid={!!error && !formData.email}>
                <FormLabel>E-mail</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <MdOutlineMail color='gray' />
                  </InputLeftElement>
                  <Input name="email" type="email" placeholder='E-mail' value={formData.email} onChange={handleChange} />
                </InputGroup>
              </FormControl>
              <FormControl id="password" isInvalid={!!error && !formData.password}>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <MdKey color='gray' />
                  </InputLeftElement>
                  <Input name="password" type="password" placeholder='Senha' value={formData.password} onChange={handleChange} />
                </InputGroup>
              </FormControl>
              <FormControl id="confirmPassword" isInvalid={!!error && !formData.confirmPassword}>
                <FormLabel>Confirmação de Senha</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents='none'>
                    <MdCheck color='gray' />
                  </InputLeftElement>
                  <Input name="confirmPassword" type="password" placeholder='Confirmação de Senha' value={formData.confirmPassword} onChange={handleChange} />
                </InputGroup>
              </FormControl>
              <Box h="24px">
                {error && (
                  <Text color="red.500">{error}</Text>
                )}
              </Box>
              <Button colorScheme="blue" size="md" type="submit" width="100%">Cadastrar</Button>
              <Center mt={2}>
                <Link to={`/`}><Text color="blue.500">Já tenho uma conta.</Text></Link>
              </Center>
            </VStack>
          </form>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
