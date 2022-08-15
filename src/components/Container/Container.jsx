import { Box } from 'components/Box';

export default function Container({ children }) {
  return (
    <Box
      maxWidth={512}
      mx="auto"
      mt={5}
      mb={5}
      borderRadius="normal"
      boxShadow="0px 5px 10px 2px rgba(45, 90, 124, 0.2)"
    >
      {children}
    </Box>
  );
}
