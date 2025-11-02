import { Box, Flex } from '@chakra-ui/react';
import SideBar from './SideBar';
import Dashboard from './Dashboard';


const SidebarLayout = () => {
  return (
    <Flex>
     
       <SideBar />
      

      {/* Main Content */}
      <Box flex="1" p={6} bg="gray.50">
        <Dashboard />
      </Box>
    </Flex>
  );
};

export default SidebarLayout;
