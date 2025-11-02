import React from 'react';
import '../mycss/textcss.css'
import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// Mock data
const stats = [
  { label: 'TCS', value: 25 ,color:'#27F5D6'},
  { label: 'Wipro', value: 43 ,color:"#b096d3ff"},
  { label: 'Infosys', value: 33,color:"#d3ca49ff" },
  { label: 'CTS', value: 52,color:"#e06b92ff" },
  { label: 'HCL', value: 25 ,color:'#cc944cff'},
  { label: 'IBM', value: 43 ,color:"#a52790ff"},
  { label: 'Google', value: 33,color:"#ee99afff" },
  { label: 'Oracle', value: 43 ,color:"#79b1dfff"},
  { label: 'Arrays', value: 33,color:"#27f56cff" },
  { label: 'DSA', value: 52,color:"#e06b92ff" },
 ];



const PracticeGridNames: React.FC = () => {
    const navQuestions = useNavigate();

    const getAllQuestion = (compantname:string)=>{
        //console.log("company--->"+compantname);
        navQuestions("/practiceMain/:"+compantname);
    }
  return (
    <Box p={16}>
      {/* Stats Header */}
      <SimpleGrid columns={[2, null, 4]} spacing={16} mb={8} >
        {stats.map((stat) => (
          
<Stat
        
          width="40px"
          height="10px"
          onClick={()=>getAllQuestion(stat.label)}
            key={stat.label}
            p={20}
            bgColor={stat.color}
            border="1px solid"
            borderColor=""
            borderRadius="md"
            
            
          >
            <StatLabel   fontSize="4xl" color="gray.500" >
              {stat.label}
            </StatLabel>
            <StatNumber fontSize="2xl">{}</StatNumber>
          </Stat>
       
          
        ))}
      </SimpleGrid>

      {/* Problems List */}
      
    </Box>
  );
};

export default PracticeGridNames;
