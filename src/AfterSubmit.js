import React from 'react';
import { Button, Card } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import './AfterSubmit.css';

export default function AfterSubmit() {
    const location = useLocation();
    const navigate = useNavigate();
    const { dataArray, time } = location.state || {};
    
    //  const data=JSON.stringify(dataArray);

    const arr = [1, 2, 3];
    const cardWidth = 260 * arr.length + 'px';

    const handleSubmit = () => {
        navigate('/result'); // Replace with your actual submit page route
    };

    const handleCancel = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <>
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
                <div className="section2">
                    <div className="col2">
                        <div className="subjectname">Aptitude</div>
                        <div className="num">{dataArray[0].total}</div>
                        <div className="num">{dataArray[0].answered}</div>
                        <div className="num">{dataArray[0].skip}</div>
                        <div className="num">0</div>
                    </div>
                </div>
                <div className="section2">
                    <div className="col2">
                        <div className="subjectname">Computer Science</div>
                        <div className="num">{dataArray[1].total}</div>
                        <div className="num">{dataArray[1].answered}</div>
                        <div className="num">{dataArray[1].skip}</div>
                        <div className="num">0</div>
                    </div>
                </div>
                <div className="section2">
                    <div className="col2">
                        <div className="subjectname">Coding</div>
                        <div className="num">{dataArray[2].total}</div>
                        <div className="num">{dataArray[2].answered}</div>
                        <div className="num">{dataArray[2].skip}</div>
                        <div className="num">0</div>
                    </div>
                </div>
            </Card>
            <div className="sen1">Are you sure you want to submit?</div>
            <div className="sen2">You still have {(dataArray[0].skip+dataArray[1].skip+dataArray[2].skip)} unattempted & 0 marked for review questions</div>
            <div className="flex6">
                <Button className="cancelbtn" variant="outlined" onClick={handleCancel}>Cancel</Button>
                <Button className="submitbtn" variant="contained" onClick={handleSubmit}>Submit Test</Button>
            </div>
        </>
    );
}
