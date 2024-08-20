

import './App.css';
import Questions from './Questions/Questions';
import Sidenav from './Sidenav/Sidenav';
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Questionbox from './QuestionBox/Questionbox';
import Dialogfile from './Dialogfile';

function SubmitPage() {

  const totalMinutes = 100;
  const [remainingSeconds, setRemainingSeconds] = useState(totalMinutes * 60);
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
    const [data, setData] = useState('');
  
  const [arr, setArr] = useState([
    [
      {
        subjectNum:0,
        questionId:0,
        question: 'Automatic type conversion is possible in which of the possible cases?',
        option1: 'Byte to int',
        option2: 'Int to long',
        option3: 'Long to int',
        'option4': 'Short to int',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1,
      },
      {'subjectNum':0,
        'questionId':1,
        'question': 'Select the valid statement',
        'option1': 'char[] ch = new char(5);',
        'option2': 'char[] ch = new char[5];',
        'option3': 'char[] ch = new char();',
        'option4': 'char[] ch = new char[]',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1
      },
      {'subjectNum':0,
        'questionId':2,
        'question': 'When an array is passed to a method, what does the method receive?',
        'option1': 'The reference of the array',
        'option2': 'A copy of the array',
        'option3': 'Length of the array',
        'option4': 'Copy of first element',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1
      }
    ],
    [
      {'subjectNum':1,
        'questionId':0,
        'question': 'Select the valid statement to declare and initialize an array.',
        'option1': 'int[] A = {}',
        'option2': 'int[] A = {1,2,3}',
        'option3': 'int[] A = (1,2,3)',
        'option4': 'int[][] A = {1,2,3}',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1
      },
      {
        'subjectNum':1,
        'questionId':1,
        'question': 'Arrays in java are-',
        'option1': 'Object references',
        'option2': 'objects',
        'option3': 'Primitive data types',
        'option4': 'None',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1
      }
    ],
    [
      {'subjectNum':2,
        'questionId':0,
        'question': 'When is the object created with new keyword?',
        'option1': 'At run time',
        'option2': 'At compile time',
        'option3': 'Depends on the code',
        'option4': 'None of these',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1
      },
      { 'subjectNum':2,
        'questionId':1,
        'question': ' Identify the corrected definition of a package',
        'option1': 'A package is a collection of editing tools',
        'option2': 'A package is a collection of classes',
        'option3': 'A package is a collection of classes and interfaces',
        'option4': 'A package is a collection of interfaces',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1
      }
    ]
  ]);
  const [statusData, setStatusData] = useState([
    {
      answered: 0,
      notanswered: 0,
      markforreview: 0,
      notvisited: arr[0].length,
    },
    {
      answered: 0,
      notanswered: 0,
      markforreview: 0,
      notvisited: arr[1].length,
    },
    {
      answered: 0,
      notanswered: 0,
      markforreview: 0,
      notvisited: arr[2].length,
    },
  ]);

  


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingSeconds > 0) {
        setRemainingSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000); // Update every 1000 milliseconds (1 second)

  
    return () => clearInterval(intervalId);
  }, [remainingSeconds]); // Run effect whenever remainingSeconds change

  const formatTime = (seconds) => {
   
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleChange = (newValue) => {
    setValue(newValue);
    setCurrentQuestion(0);
    
  };

  const handleQuestionNumber = (num) =>{
    setCurrentQuestion(num);
  }

  const handleClearSelection = () => {
      setArr(prevQuestions => {
        const updatedQuestions = [...prevQuestions];
        updatedQuestions[value][currentQuestion] = {
          ...updatedQuestions[value][currentQuestion],
          selectedoption: '',
          visited:true,
          status:false
        };
        return updatedQuestions;
      });

      setStatusData((prevStatusData) => {
        const newStatusData = [...prevStatusData]; 
        newStatusData[value] = { ...newStatusData[value], answered: newStatusData[value].answered - 1,notanswered: newStatusData[value].notanswered + 1}; 
        return newStatusData; 
      });
  };

  const saveNext = () =>{
        if(currentQuestion < arr[value].length-1){
            
            updateStatus(value, currentQuestion);
            setCurrentQuestion(currentQuestion+1);
        }
        else
          { if(value<arr.length-1)
            {
              setValue(value+1);
              updateStatus(value, currentQuestion);
              setCurrentQuestion(0);
            }
          }
  }
  const updateStatus = (sectionIndex, questionIndex) => {
  
    let temp1=arr[sectionIndex][questionIndex].markforreview;
    setArr(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[sectionIndex][questionIndex] = {
        ...updatedQuestions[sectionIndex][questionIndex],
        markforreview:false
        
       
      };
      return updatedQuestions;
    });
    
    if(temp1){
      setStatusData((prevStatusData) => {
        
        const newStatusData = [...prevStatusData];
        newStatusData[sectionIndex] = { ...newStatusData[sectionIndex], markforreview: newStatusData[sectionIndex].markforreview - 1 }; 
        return newStatusData; 
      
      });
    }
  };


  
  const updateSelectedOption = (sectionIndex, questionIndex, newStatus) => {
    let temp=arr[sectionIndex][questionIndex].status;
    setArr(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[sectionIndex][questionIndex] = {
        ...updatedQuestions[sectionIndex][questionIndex],
        selectedoption: newStatus,
        visited:true,
        status:true
      };
      return updatedQuestions;
    });cd 
    if(!temp){
    setStatusData((prevStatusData) => {
      const newStatusData = [...prevStatusData]; 
      newStatusData[sectionIndex] = { ...newStatusData[sectionIndex], answered: newStatusData[sectionIndex].answered + 1,notanswered: newStatusData[sectionIndex].notanswered - 1}; 
      return newStatusData; 
    });
  }

  };
  const updateVisitedStatus = (sectionIndex, questionIndex) => {
    let temp=arr[sectionIndex][questionIndex].visited;
  
    setArr(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[sectionIndex][questionIndex] = {
        ...updatedQuestions[sectionIndex][questionIndex],
        visited:true,
        
       
      };
      return updatedQuestions;
    });
    if(!temp){
    setStatusData((prevStatusData) => {
      
      const newStatusData = [...prevStatusData];
      newStatusData[sectionIndex] = { ...newStatusData[sectionIndex], notvisited: newStatusData[sectionIndex].notvisited - 1,notanswered: newStatusData[sectionIndex].notanswered + 1 }; 
      return newStatusData; 
    
    });
  }
   
  };

  const handleClose = () => {
    setOpen(false);
};

  
  const onSubmit = () =>{
    let score=0;
      let w=0;
      let skip=0;
      let notvisited=0;
   let array = [];
    arr.forEach((section, sectionIndex) => {
     w=0;
     score=0;
     skip=0;
     notvisited=0;
      section.forEach((question) => {
       if(!question.visited)
        notvisited+=1;
       if(question.selectedoption == 1){
        score+=1;
       }
       else if(question.selectedoption == -1)
       {
        skip+=1;
       }
       else
       {
        w+=1;
       }
      });
      array.push({answered:score,wrong:w, skip:skip,notvisited:notvisited,total:(score+skip)});
    });

   console.log(array);
    const resultData = {
     dataArray:array,
      time:(100*60-remainingSeconds)
      
    };
    
    setData(resultData);
    setOpen(true);
    // navigate('/AfterSubmit',{ state: resultData });
  }
    
  
  const markOption = () =>{

    setArr(prevQuestions => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[value][currentQuestion] = {
        ...updatedQuestions[value][currentQuestion],
       markforreview: true
       
        
      };
      return updatedQuestions;
    });

    setStatusData((prevStatusData) => {
      const newStatusData = [...prevStatusData]; 
      newStatusData[value] = { ...newStatusData[value], markforreview: newStatusData[value].markforreview + 1}; 
      return newStatusData; 
    });    
  } 

  return (
    <div className="App">
      <div className="nav">
        <div className="title">RKR</div>
        <div className='timer'>
             {formatTime(remainingSeconds)} 
        </div>
      </div>
      <div className="flex">
        <div className='newbox'>
          <TabContext value={value}>
                <Questions onSubjectFrom={handleChange} ></Questions>
                <TabPanel value={0}>
                  <Questionbox key={`question-${currentQuestion}`} questions={arr[value][currentQuestion]} selectedOption={updateSelectedOption}  updateVisitedStatus={updateVisitedStatus}></Questionbox>
                </TabPanel>
                <TabPanel value={1}><Questionbox key={`kishore-${currentQuestion}`} questions={arr[value][currentQuestion]} selectedOption={updateSelectedOption} updateVisitedStatus={updateVisitedStatus}></Questionbox></TabPanel>
                <TabPanel value={2}><Questionbox key={`ravi-${currentQuestion}`} questions={arr[value][currentQuestion]} selectedOption={updateSelectedOption} updateVisitedStatus={updateVisitedStatus}></Questionbox></TabPanel>
          </TabContext>
        </div>
         <Sidenav questionData={arr[value]} getNumber={handleQuestionNumber} updateVisited={updateVisitedStatus} data={statusData[value]} ></Sidenav>
      </div>
      <div className="navbarContainer">
        <Button variant="outlined" size='medium' style={{marginLeft:'15px'}} onClick={handleClearSelection}disabled={!arr[value][currentQuestion].status}>Clear Response</Button>
        <Button variant="outlined" size='medium' style={{marginLeft:'25px'}} onClick={markOption} disabled={!arr[value][currentQuestion].status || arr[value][currentQuestion].markforreview }  > Mark for Review</Button>
        <Button variant="contained" size='medium' style={{marginLeft:'550px'}} onClick={saveNext}>Save & Next</Button>
        <Button variant="outlined" size='medium' style={{marginLeft:'auto',marginRight:'20px',width:'200px',backgroundColor:'orange',color:'black'}} onClick={onSubmit}>Submit </Button>
        <Dialogfile open={open} onClose={handleClose} data={data} />
      </div>
     
    </div>
  );
}

export default SubmitPage;
