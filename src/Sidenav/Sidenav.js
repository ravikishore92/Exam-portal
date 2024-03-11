
import './Sidenav.css';

export  default function Sidenav({questionData,getNumber,updateVisited,data})
{
   const sendData = (x,subjectid,questionid) =>{
    getNumber(x);
    updateVisited(subjectid,questionid);
   }
   

  
    return (
        <>
        <div className="box">
                    
                <div className='name'>
                    <div className='ravi'>Ravi kishore Reddy</div>
                </div>

                <div className='borderbox'>
                    <button  className='btn' style={{backgroundColor:'green'}}>{data.answered}</button>
                    <div className='btnname'>Answered</div>
                    <button className='btn'style={{backgroundColor:'red'}}>{data.notanswered}</button>
                    <div className='btnname'>Not Answered</div>
                    <button className='btn' style={{backgroundColor:''}}>{data.notvisited >0 ? data.notvisited:0}</button>
                    
                    <div className='btnname' >Not Visited</div>
                    
                </div>
                <div className='details'>
                <button  className='btn'style={{backgroundColor:'purple'}}>{data.markforreview}</button>
                    <div className='btnname'>MarK for Review</div>
                    <button  className='btnspl'>0</button>
                    <div className='btnname'>MarK for Review</div>
                </div>
               <div className='section'>
                    <div style={{fontWeight:'500'}}>Section: </div>
                    <div style={{fontWeight:'400',marginLeft:'10px'}}>Full Stack Java</div>
                    
               </div>
               <div className='btnfor'>
                
                {questionData.map((ele, index) => (
                    <button key={index} className='btnq' onClick={() => {sendData(index,ele.subjectNum,ele.questionId)}}  style={{ backgroundColor: (ele.status && ele.visited )? 'green' : ele.visited ? 'red' : '' }} >
                    {index+1}
               </button>
      ))}
               </div>
        </div>
        </>
    );
}