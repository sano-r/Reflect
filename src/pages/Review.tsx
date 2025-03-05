import { ReviewCalendar } from "@/components/molecures/ReviewCalender";
import { reviews } from "@/data/reviews";
import { Box, Heading, List, Separator, Text } from "@chakra-ui/react";

export function Review() {
  return (
    <Box p={4} w={{ md: 1000 }}>
      <Heading size="3xl" mb={4}>
        まとめ
      </Heading>
      <Separator />
      <Box p={4}>
        <Heading mb={4}>Review Summary</Heading>
        <ReviewCalendar reviews={reviews} />
        <Box mt={4}>
          <Heading size="md" mb={2}>
            Review List
          </Heading>
          <List.Root>
            {reviews.map((review, index) => (
              <List.Item key={index}>
                <Text>
                  {review.date.toDateString()}: {review.content}
                </Text>
              </List.Item>
            ))}
          </List.Root>
        </Box>
      </Box>
    </Box>
  );
}
