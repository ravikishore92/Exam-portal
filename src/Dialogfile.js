import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Dialogfile.css';

const CustomDialog = React.memo(({ open, onClose, data }) => {
    const navigate = useNavigate();
    const arr = [1, 2, 3];
    const cardWidth = 260 * arr.length + 'px';
    
    const handleYesClick = () => {
        let score = data.dataArray[0].answered + data.dataArray[1].answered + data.dataArray[2].answered;
        let skipped = data.dataArray[0].skip + data.dataArray[1].skip + data.dataArray[2].skip;
        let wrong = data.dataArray[0].wrong + data.dataArray[1].wrong + data.dataArray[2].wrong;
       
        const resultData = {
            score: score,
            wrong: wrong,
            skip: skipped,
            time: data.time
        };
        navigate('/Result', { state: resultData }); // Navigate to the next page
    };

    if (!data || !data.dataArray) {
        return null; // or you can show a loading spinner or message
    }

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <div className="exam">Exam Summary</div>
            <Card variant="outlined" className="cardflex" style={{ width: cardWidth }}>
                <div className="section1">
                    <div className="col1">
                        <div className="section3">Section Name</div>
                        <div className="flex4">
                            <div className="text1">No.of Questions</div>
                        </div>
                        <div className="flex4">
                            <div className="text1">Answered</div>
                        </div>
                        <div className="flex4">
                            <div className="text1">Not Answered</div>
                        </div>
                        <div className="flex4">
                            <div className="text1">Not Visited</div>
                        </div>
                        <div className="flex4">
                            <div className="text1">Mark for Review</div>
                        </div>
                    </div>
                </div>
                {data.dataArray.map((section, index) => (
                    <div className="section2" key={index}>
                        <div className="col2">
                            <div className="subjectname">{index === 0 ? 'Aptitude' : index === 1 ? 'Computer Science' : 'Coding'}</div>
                            <div className="num">{section.total}</div>
                            <div className="num">{section.answered}</div>
                            <div className="num">{section.skip}</div>
                            <div className="num">{section.notvisited}</div>
                          
                        </div>
                    </div>
                ))}
            </Card>
            <div className="sen1">Are you sure you want to submit?</div>
            <div className="sen2">You still have {data.dataArray.reduce((acc, section) => acc + section.skip, 0)} unattempted & 0 marked for review questions</div>
            <DialogActions>
                <div className="flex6">
                    <Button className="cancelbtn" variant="outlined" onClick={onClose}>Cancel</Button>
                    <Button className="submitbtn" variant="contained" onClick={handleYesClick}>Submit Test</Button>
                </div>
            </DialogActions>
        </Dialog>
    );
});

export default CustomDialog;
