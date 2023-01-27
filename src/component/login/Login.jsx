import {
    FormControl,
    FormLabel,Input,
    FormErrorMessage,
    FormHelperText,Heading
  } from '@chakra-ui/react'
  import {React ,useState} from 'react'
import { useDisclosure } from '@chakra-ui/react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
  Text,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import {
    Flex,

  
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,


    InputRightElement
  } from "@chakra-ui/react";

import LoginForm from './LoginForm'
export default function Login()
{
    const OverlayOne = () => (
        <ModalOverlay
   
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne />)


    function Auth(){

    }
    return (
        <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Sample Website</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                     
                    />
                    <Input type="email" placeholder="email address" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      
                    />
                    <Input
                      type={"text"}
                      placeholder="Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" >
                       
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
         
        <h2
          mt='4'
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
          className= {`cursor-pointer font-poppins primary`} >
          Login Using <span   className='font-semibold'>BioSafe</span>
        </h2>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            
            <ModalCloseButton />
            <LoginForm></LoginForm>
          </ModalContent>
        </Modal>
         
        </Box>
      </Flex>
    )
}