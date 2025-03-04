import { Box, Heading, Separator } from "@chakra-ui/react";

export function Review() {
  return (
    <Box p={4} w={{ md: 1000 }}>
      <Heading size="3xl" mb={4}>
        まとめ
      </Heading>
      <Separator />
    </Box>
  );
}
