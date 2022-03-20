import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
        console.log(steps)
    }
    
    useEffect( () => {
        console.log(steps)
    },[steps])



    return (
        <div style={{border:'2px solid purple', margin: '20px'}}>
            <h2>This is my smart watch</h2>
            <h4>My current steps: {steps}</h4>
            <button onClick={increaseSteps}>Increase Steps</button>
            <Display name="Muhammad" steps={steps}></Display>
        </div>
        
    );
};

export default Watch;