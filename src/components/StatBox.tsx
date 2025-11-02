// StatBox.tsx
import { Stat, StatLabel, StatNumber, StatHelpText, Box } from "@chakra-ui/react";

interface StatBoxProps {
  label: string;
  value: string;
  change: string;
}

export const StatBox = ({ label, value, change }: StatBoxProps) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4}>
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
        <StatHelpText color="green.400">{change}</StatHelpText>
      </Stat>
    </Box>
  );
};
