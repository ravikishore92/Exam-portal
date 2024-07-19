import * as React from 'react';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import TabList from '@mui/lab/TabList';




import './Questions.css';

export default function Questions({onSubjectFrom})
{ 
    
  
  const onClickSubject=(event,subject) =>{
    onSubjectFrom(subject);
  }
    
    return (
        <>
        <div className='box4'> 
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange = {onClickSubject} aria-label="lab API tabs example">
                      <Tab label="Aptitude" value={0} />
                      <Tab label="Computer Scince" value = {1} />
                      <Tab label="Coding" value = {2} />
                    </TabList>
                 </Box>
        </div>
        </>
    );
}