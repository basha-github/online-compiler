// Dashboard.tsx
import { SimpleGrid, VStack } from "@chakra-ui/react";
import { StatBox } from "./StatBox";
import { WeeklyActivity } from "./WeeklyActivity";
import { CurrentGoals } from "./CurrentGoals";

const Dashboard = () => {
  return (
    <VStack spacing={6} align="stretch" p={6}>
      <SimpleGrid columns={[1, 2, 4]} spacing={6}>
        <StatBox label="Projects Completed" value="24" change="+3 this week" />
        <StatBox label="Coding Hours" value="156h" change="+12h this week" />
        <StatBox label="Achievements" value="12" change="+2 this month" />
        <StatBox label="Current Streak" value="7 days" change="Keep it up!" />
      </SimpleGrid>

      <SimpleGrid columns={[1, 2]} spacing={6}>
        <WeeklyActivity />
        <CurrentGoals />
      </SimpleGrid>
    </VStack>
  );
};

export default Dashboard;
