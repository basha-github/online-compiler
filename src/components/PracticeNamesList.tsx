import { Box, Flex } from '@chakra-ui/react';
import SideBar from './SideBar';
import PracticeGridNames from './PracticeGridNames';


const PracticeNamesList = () => {
  return (
    <Flex>
     
       {<SideBar />}
      

      {/* Main Content */}
      <Box flex="1" p={6} bg="gray.50">
        <PracticeGridNames />
      </Box>
    </Flex>
  );
};

export default PracticeNamesList;
