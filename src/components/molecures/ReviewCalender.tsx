// src/components/ReviewCalendar.tsx
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, Text } from "@chakra-ui/react";
import { Review } from "../../data/reviews";

interface ReviewCalendarProps {
  reviews: Review[];
}

export function ReviewCalendar({ reviews }: ReviewCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const highlightDates = reviews.map((review) => review.date);

  return (
    <Box>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date ?? new Date())}
        highlightDates={highlightDates}
        inline
      />
      <Box mt={4}>
        <Text>Selected Date: {selectedDate.toDateString()}</Text>
      </Box>
    </Box>
  );
}
