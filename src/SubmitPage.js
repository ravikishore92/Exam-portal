

import './App.css';
import Questions from './Questions/Questions';
import Sidenav from './Sidenav/Sidenav';
import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Questionbox from './QuestionBox/Questionbox';
import { useNavigate } from 'react-router-dom';
import Dialogfile from './Dialogfile';

function SubmitPage() {
  const navigate = useNavigate();
  const totalMinutes = 100;
  const [remainingSeconds, setRemainingSeconds] = useState(totalMinutes * 60);
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
    const [data, setData] = useState('');
  const [answers, setAnswers] = useState([]);
  const [arr, setArr] = useState([
    [
      {
        subjectNum:0,
        questionId:0,
        question: 'This is 1st Section and 1st question',
        option1: 'ravi',
        option2: 'ram',
        option3: 'kishore',
        'option4': 'reddy',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1,
      },
      {'subjectNum':0,
        'questionId':1,
        'question': 'This is 1st Section and 2nd question',
        'option1': 'ravi',
        'option2': 'ram',
        'option3': 'kishore',
        'option4': 'reddy',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1
      },
      {'subjectNum':0,
        'questionId':2,
        'question': 'This is 1st Section and 3rd question',
        'option1': 'ravi',
        'option2': 'ram',
        'option3': 'kishore',
        'option4': 'reddy',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1
      }
    ],
    [
      {'subjectNum':1,
        'questionId':0,
        'question': 'This is 2nd Section and 1st question',
        'option1': 'ravi',
        'option2': 'ram',
        'option3': 'kishore',
        'option4': 'reddy',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1
      },
      {
        'subjectNum':1,
        'questionId':1,
        'question': 'This is 2nd Section and 2nd question',
        'option1': 'ravi',
        'option2': 'ram',
        'option3': 'kishore',
        'option4': 'reddy',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1
      }
    ],
    [
      {'subjectNum':2,
        'questionId':0,
        'question': 'This is 3rd Section and 1st question',
        'option1': 'ravi',
        'option2': 'ram',
        'option3': 'kishore',
        'option4': 'reddy',
        'visited': false,
        'status': false,
        'markforreview': false,
        'selectedoption':-1
      },
      { 'subjectNum':2,
        'questionId':1,
        'question': 'This is 3rd Section and 2nd question',
        'option1': 'ravi',
        'option2': 'ram',
        'option3': 'kishore',
        'option4': 'reddy',
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

  const [answersData, setAnswersData] = useState([]);


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
            
            updateVisitedStatus(value, currentQuestion);
            setCurrentQuestion(currentQuestion+1);
        }
        else
          { if(value<arr.length-1)
            {
              setValue(value+1);
              updateVisitedStatus(value, currentQuestion);
              setCurrentQuestion(0);
            }
          }
  }
  
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
    });
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
        <Button variant="outlined" size='medium' style={{marginLeft:'15px'}} onClick={handleClearSelection}>Clear Response</Button>
        <Button variant="outlined" size='medium' style={{marginLeft:'25px'}}>Mark for Review</Button>
        <Button variant="contained" size='medium' style={{marginLeft:'550px'}} onClick={saveNext}>Save & Next</Button>
        <Button variant="outlined" size='medium' style={{marginLeft:'auto',marginRight:'20px',width:'200px',backgroundColor:'orange',color:'black'}} onClick={onSubmit}>Submit </Button>
        <Dialogfile open={open} onClose={handleClose} data={data} />
      </div>
     
    </div>
  );
}

export default SubmitPage;
