import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  Button,
  HStack,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useParams } from "react-router-dom";
//import type { Props } from "react-select";

interface Question {
  id:string,
  title: string;
  description: string;
  constraints: string;
}

// Mock data
const stats = [
  { label: "Total Problems", value: 9 },
  { label: "Solved", value: 3 },
  { label: "Success Rate", value: "33%" },
  { label: "Contest Wins", value: 12 },
];

type PracticeDashboardProps = {
  children?: React.ReactNode; // children can be optional
};
const PracticeDashboard = ({children}: PracticeDashboardProps) => {
  const { id } = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    const val = JSON.stringify(id);

    const url =
      "https://edu-tech-exam-app-latest-2.onrender.com/online/compiler/questions/get/bycategory";
    console.log("props.." + children);

    axios.get(url, { params: { category: val } }).then((res) => {
      console.log("kadiri...."+res.data);
      setQuestions(res.data);
    });
  }, []);
  return (
    <Box p={6}>
      {/* Stats Header */}
      <SimpleGrid columns={[2, null, 4]} spacing={6} mb={8}>
        {stats.map((stat) => (
          <Stat
            key={stat.label}
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            textAlign="center"
          >
            <StatLabel fontSize="sm" color="gray.500">
              {stat.label}
            </StatLabel>
            <StatNumber fontSize="2xl">{stat.value}</StatNumber>
          </Stat>
        ))}
      </SimpleGrid>

      {/* Problems List */}
      <VStack spacing={6} align="stretch">
        {questions?.map((question) => (
          <Box
            key={question.title}
            p={5}
            borderWidth="1px"
            borderRadius="md"
            shadow="sm"
          >
            <Flex align="center" mb={2}>
              <CheckCircleIcon color="green.400" mr={2} />
              <Text fontWeight="bold" fontSize="lg">
                {question.title}
              </Text>
              <Spacer />
               {/*<Text fontWeight="bold" fontSize="lg" color='#e06b92ff'>
                <Link href={"/codeEditor/"+question.id}>Answer</Link>
              </Text>*/}
              <Button size="sm" colorScheme="purple">
                <Link href={"/codeEditor/"+question.id}>Answer</Link>
              </Button>
               <Spacer />
              
              <Button size="sm" color='#2cd0dbff'>
                <Link href={"/practiceCodeEditor/"+question.id}>Solve</Link>
              </Button>
            </Flex>

            <Text fontSize="sm" color="gray.600" mb={2}>
              {question.description}
            </Text>

            {/* Tags */}
            <HStack spacing={2} mb={2}></HStack>

            {/* Companies */}
            <HStack spacing={2} mb={1}></HStack>

            {/* Time Info */}
            <Text fontSize="xs" color="gray.500"></Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default PracticeDashboard;
