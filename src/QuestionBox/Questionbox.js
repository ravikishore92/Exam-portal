import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import React, { useState, useEffect } from 'react';

export default function Questionbox({questions,selectedOption,updateVisitedStatus}){

  useEffect(() => {
    console.log(questions.subjectNum);
    updateVisitedStatus(questions.subjectNum, questions.questionId);
  }, [questions.subjectNum, questions.questionId]);

 
  const handleOptionChange =(event) =>{
      selectedOption(questions.subjectNum,questions.questionId,event.target.value);
  }
  
  

  
    return (
        <>
          <div>{questions.question}</div>
             <FormControl>
              
              <RadioGroup
                value={questions.selectedoption}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value={1} control={<Radio />} label={questions.option1} onChange={handleOptionChange}   />
                <FormControlLabel value={2} control={<Radio />} label={questions.option2} onChange={handleOptionChange}   />
                <FormControlLabel value={3} control={<Radio />} label={questions.option3} onChange={handleOptionChange}    />
                <FormControlLabel value={4} control={<Radio />} label={questions.option4} onChange={handleOptionChange}   />
              </RadioGroup>
            </FormControl>
        </>
    );
}