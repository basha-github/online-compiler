import { FormControl, FormLabel } from '@chakra-ui/form-control';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const home = useNavigate();
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const [userRes,setUserRes] = useState('');

  const getUserName = (e:any)=>{
    setUsername(e.target.value);
  }

  const getPassword =(e:any)=>{
    setPassword(e.target.value);
  }

const gotoHome = ()=>{
  try{

    axios.get("https://edu-tech-exam-app-latest-2.onrender.com/online/exam/user/find?email="+username+"&password="+password)
    .then(
      (res)=>{

        console.log(res.data);
        
        if(res.data == true){
            home("/dash");
        }
        else{
          console.log("else part executed!!!!!");
          setUserRes("Crendentials are not good!");
        }

      }
    );
  }catch(e:any){
      setUserRes("Something went Wrong in Server!");
  }
    
}

  return (
    <div className=''>

      
    <Flex
    margin="auto"
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to continue to <Link color={'blue.400'}>LeetCode</Link> ✌️
          </Text>
         <Text color="#f30756ff">
            {userRes}
         </Text>
        </Stack>
       
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
              onChange={getUserName}
              type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input 
              onChange={getPassword}
              type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Button
              onClick={gotoHome}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
              <Text align={'center'}>
                Don't have an account? <Link color={'blue.400'}>Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </div>
  );
};

export default Login;
