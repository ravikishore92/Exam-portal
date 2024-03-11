const updateQuestionStatus = (sectionIndex, questionIndex, newStatus) => {
  setQuestions(prevQuestions => {
    const updatedQuestions = [...prevQuestions];
    updatedQuestions[sectionIndex][questionIndex] = {
      ...updatedQuestions[sectionIndex][questionIndex],
      status: newStatus
    };
    return updatedQuestions;
  });
};



// Example of updating the status of the question at section index 1 and question index 0
updateQuestionStatus(1, 0, true);
