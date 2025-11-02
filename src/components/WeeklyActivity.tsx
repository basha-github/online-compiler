// WeeklyActivity.tsx
import { Box, Text, VStack, HStack, Progress } from "@chakra-ui/react";

const activityData = [
  { day: "Mon", hours: 3.5 },
  { day: "Tue", hours: 4.2 },
  { day: "Wed", hours: 2.8 },
  { day: "Thu", hours: 5.1 },
  { day: "Fri", hours: 3.9 },
  { day: "Sat", hours: 2.3 },
  { day: "Sun", hours: 1.8 },
];

export const WeeklyActivity = () => (
  <Box borderWidth="1px" borderRadius="lg" p={4}>
    <Text fontWeight="bold" mb={4}>📅 Weekly Activity</Text>
    <VStack spacing={3} align="stretch">
      {activityData.map((day) => (
        <HStack key={day.day} justify="space-between">
          <Text w="40px">{day.day}</Text>
          <Progress value={(day.hours / 6) * 100} w="100%" colorScheme="teal" borderRadius="md" />
          <Text w="40px" textAlign="right">{day.hours}h</Text>
        </HStack>
      ))}
    </VStack>
  </Box>
);
