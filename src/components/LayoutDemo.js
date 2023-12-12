import { Box, Button, Text } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";


export const LayoutDemo = () => {
    return (
        <HStack spacing="30px">
        <Box w="300px" h="300px" bgColor="salmon">
          <Text fontSize="20px" color="white">Chakra Ui</Text>
          <Button colorScheme="blue" >Button</Button>
        </Box>
        <Box w="300px" h="300px" bgColor="salmon">
          <Text fontSize="50px" color="white">Chakra Ui</Text>
          <Button colorScheme="teal" size="1g">Button</Button>
        </Box>
        <Box w="300px" h="300px" bgColor="salmon">
          <Text fontSize="20px" color="white">Chakra Ui</Text>
          <Button colorScheme="teal" size="1g" variant="outline">Button</Button>
        </Box>
  </HStack>
    )
}