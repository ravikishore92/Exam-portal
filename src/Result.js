
import './Result.css';
import PercentRoundedIcon from '@mui/icons-material/PercentRounded';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useLocation } from 'react-router-dom';

export default function Result(){
    const location = useLocation();
const { score,wrong,skip,time } = location.state || {};
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds} sec`;
  };

    return (
        <>
         <div className="box1">
            <div>
            {(score<(score+wrong+skip)/2) &&<div className='try'> Try harder next time!</div>}
            {(score>=(score+wrong+skip)/2) &&  <div className='try'> You have successfully cleared the test.</div>}

            {(score<(score+wrong+skip)/2) &&<div className='red'> You did not meet the cut-off</div>}
            {(score>=(score+wrong+skip)/2) &&  <div className='red'>You have reached the cut-off.</div>}

                <div className='flex1'>
                    <div className='score'>Score</div>
                    <div className='score'>Rank</div>
                </div>
                <div className='flex2'>
                    <div className='scorevalue'>{JSON.stringify(score)*2}/{(score+wrong+skip)*2}</div>
                    <div className='scorevalue'>1234/3000</div>
                </div>
            </div>
            {(score<(score+wrong+skip)/2) && 
                <div className='image'>
                    <img src='https://grdp.co/cdn-cgi/image/width=220,quality=100,f=auto/https://gs-post-images.grdp.co/2021/4/group-9-copy-2x-img1619171532118-62.png-rs-high-webp.png'></img>
                    
                </div>}
                {(score >= (score+wrong+skip)/2) && 
                <div className='image1'>
                    <img width={140} height={120} src="https://png.pngtree.com/png-clipart/20230804/original/pngtree-vector-completed-stamp-illustration-background-grunge-vector-picture-image_9515919.png"></img>
                    
                </div>}
              
         </div>
         <div className='boxes'>
            <div className='box2'>
               <img className='img' src='https://grdp.co/cdn-cgi/image/width=32,quality=100,f=auto/https://gs-post-images.grdp.co/2021/4/group-24-2x-img1619115188316-75.png-rs-high-webp.png'></img>
               <div className='currect'>Currect</div>
               <div className='num'>{score}</div>
               <div className='qust'>Questions</div>
            </div>
            <div className='box2'>
              <img className='img' src='https://grdp.co/cdn-cgi/image/width=32,quality=100,f=auto/https://gs-post-images.grdp.co/2021/4/group-25-2x-img1619115169635-72.png-rs-high-webp.png'></img>
              <div className='wrong'>Wrong</div>
              <div className='num'>{wrong}</div>
              <div className='qust'>Questions</div>
            </div>
            <div className='box2'>
              <img className='img' src='https://grdp.co/cdn-cgi/image/width=32,quality=100,f=auto/https://gs-post-images.grdp.co/2021/4/group-26-2x-img1619115102361-47.png-rs-high-webp.png'></img>
              <div className='skip'>Skipped</div>
              <div className='num'>{skip}</div>
              <div className='qust'>Questions</div>
            </div>
            <div className='other'>
             <div className='other1'>
                <PercentRoundedIcon></PercentRoundedIcon>
                <div className='ValueName'>Percentile</div>
                <div className='number'>{(score/(skip+wrong+skip))*100}%</div>
             </div>
             <div className='other1'>
                 <EqualizerIcon></EqualizerIcon>
                 <div className='ValueName'>Accuracy</div>
                 <div className='number'>64.50</div>       
             </div>
             <div className='other1'>
                <AccessTimeIcon></AccessTimeIcon>
                <div className='ValueName'>Time Taken</div>
                <div className='number'>{formatTime(time)}</div>
              </div>
            </div>
         </div>
        </>
    );
}