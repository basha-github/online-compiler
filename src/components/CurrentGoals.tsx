// CurrentGoals.tsx
import { Box, Text, VStack, Progress } from "@chakra-ui/react";

const goals = [
  { name: "Complete React Course", progress: 75 },
  { name: "Build Portfolio Project", progress: 60 },
  { name: "30-Day Coding Streak", progress: 23 },
];

export const CurrentGoals = () => (
  <Box borderWidth="1px" borderRadius="lg" p={4}>
    <Text fontWeight="bold" mb={4}>⚡ Current Goals</Text>
    <VStack spacing={4} align="stretch">
      {goals.map((goal) => (
        <Box key={goal.name}>
          <Text fontSize="sm" mb={1}>{goal.name}</Text>
          <Progress value={goal.progress} colorScheme="purple" borderRadius="md" />
        </Box>
      ))}
    </VStack>
  </Box>
);
