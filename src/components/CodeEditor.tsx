import { Box, Flex } from '@chakra-ui/react';
import CodeEditorContent from './CodeEditorContent';
import { useParams } from 'react-router-dom';


const CodeEditor = () => {
  const {id} = useParams();

  return (
    <Flex>
     
      <Box flex="1" p={6} bg="gray.50">
        <CodeEditorContent > {id}</CodeEditorContent>
      </Box>
    </Flex>
  );
};

export default CodeEditor;
