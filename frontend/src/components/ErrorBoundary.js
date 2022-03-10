import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Container maxW="xl" centerContent margin="auto">
      <Alert
        status="info"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="390px"
        bg="teal"
        color="white"
        borderRadius="16px"
        borderWidth="2px"
        borderColor="black"
      >
        <AlertIcon boxSize="45px" mr={0} color="white" />
        <AlertTitle mt={5} fontSize="3xl">
          Your chats are loading⌛
        </AlertTitle>
        <Spinner
          m={6}
          thickness="6px"
          speed="0.99s"
          emptyColor="gray.200"
          color="teal"
          size="xl"
        />
        <AlertDescription  maxWidth="md" color="white">
          (Still loading⌛ Click on the Button Below ⬇️)
        </AlertDescription>
        <Button
          fontWeight="bold"  
          variant="ghost"
          bg="black"
          mt={7}
          color="white"
          borderColor="black"
          onClick={resetErrorBoundary}
          _hover={{ background: "black", color: "white" }}
          _active={{ background: "black", color: "white" }}
        >
          Continue Texting ➡️
        </Button>
      </Alert>
    </Container>
  );
}

export default ErrorFallback;
