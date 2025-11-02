// components/Sidebar.tsx
import {
  Box,
  Text,
  Avatar,
  Icon,
  VStack,
  HStack,
  Badge,
  Divider,
  Link,
} from "@chakra-ui/react";
import { FaCode, FaHome, FaProjectDiagram } from "react-icons/fa";



const SideBar = () => {
  return (
    <Box
      w="260px"
      h="100vh"
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      p={4}
    >
      {/* Logo */}
      <HStack mb={8}>
        <Box
          bg="black"
          color="white"
          borderRadius="md"
          px={2}
          py={1}
          fontWeight="bold"
        >
          <Icon as={FaCode} mr={2} />
        </Box>
        <Text fontSize="lg" fontWeight="bold">
          CodePlatform
        </Text>
      </HStack>

      {/* User Info */}
      <VStack align="start" spacing={1} mb={8}>
        <Avatar name="John Developer" size="sm" />
        <Box>
          <Text fontWeight="bold">John Developer</Text>
          <Text fontSize="sm" color="gray.500">
            Intermediate Coder
          </Text>
        </Box>
        <Badge colorScheme="gray" borderRadius="md" px={2}>
          ⭐ 1,240
        </Badge>
      </VStack>

      <Divider mb={4} />

      {/* Menu Items */}
      <VStack align="stretch" spacing={2}>
        <Text></Text>
        <Box>
        <Link href="/dash">
          <Icon as={FaHome} mx="2px" /> DashBoard
        </Link>
        
        </Box>
        <Text></Text>
      
        <Link href="/practice">
          <Icon as={FaProjectDiagram} mx="2px" /> Practice 
        </Link>
       
       
        
      </VStack>
    </Box>
  );
};

export default SideBar;
