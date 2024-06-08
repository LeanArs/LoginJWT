import { ChakraProvider } from '@chakra-ui/react';
import { Link } from "react-router-dom";


export default function About(){
    return(
        <ChakraProvider>
            <h1>About</h1>
            <Link to={`/`}>Voltar</Link>
        </ChakraProvider>
    )
  }