import { Icon } from "@chakra-ui/react";
import { FaHome} from "react-icons/fa";
import ProblemEditor from "./ProblemEditor";
import { Link } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


type CodeEditorContentProps = {
  children?: React.ReactNode; // children can be optional
};


export default function CodeEditorContent({ children }: CodeEditorContentProps) {

  const {id} = useParams();

  useEffect(()=>{
  console.log("hello"+{children});

  },[]);
  
  return (
    <div>
      <Link href="/dash">
        <Icon as={FaHome} mx="2px" /> DashBoard
      </Link>
      <ProblemEditor >{id}</ProblemEditor>
    </div>
  );
}
