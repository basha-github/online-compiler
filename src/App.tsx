import { ChakraProvider } from "@chakra-ui/react";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SidebarLayout from "./components/SidebarLayout";
import PracticeMain from "./components/PracticeMain";
import CodeEditor from "./components/CodeEditor";
import PracticeNamesList from "./components/PracticeNamesList";
import PracticeCodeEditor from "./components/PracticeCodeEditor";

export default function App() {
  return (
    <div>
      <ChakraProvider resetCSS={false}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dash" element={<SidebarLayout />} />
            <Route path="/practiceMain/:id" element={<PracticeMain />} />
            <Route path="/practice" element={<PracticeNamesList />} />
            <Route path="/codeEditor/:id" element={<CodeEditor />} />
            <Route path="/practiceCodeEditor/:id" element={<PracticeCodeEditor />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}
