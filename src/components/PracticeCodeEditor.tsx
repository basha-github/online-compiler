import { Box, Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import PracticeCodeEditorContent from './PracticeCodeEditorContent';


const PracticeCodeEditor = () => {
  const {id} = useParams();

  return (
    <Flex>
     
      <Box flex="1" p={6} bg="gray.50">
        <PracticeCodeEditorContent > {id}</PracticeCodeEditorContent>
      </Box>
    </Flex>
  );
};

export default PracticeCodeEditor;
