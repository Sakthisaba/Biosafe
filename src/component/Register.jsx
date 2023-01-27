import {React ,useState} from 'react'
import { useDisclosure } from '@chakra-ui/react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,Text,
    ModalCloseButton,
  } from '@chakra-ui/react'
import Form from './Form'

export default function Register() {
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
  
    return (
      <>
        
      
        <Button
          mt='4'
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
        >
          Get Started Now
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            
            <ModalCloseButton />
            <Form></Form>
          </ModalContent>
        </Modal>
      </>
    )
  }