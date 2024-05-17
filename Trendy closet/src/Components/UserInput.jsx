import {useState} from 'react';

export default function UserInput(){
    const [initialInvestment, setInitialInvestment]= useState(1000);

    const [annualInvestmemt, setAnnualInvestment]= useState(1200);

    const [expextedReturn, setExpectedReturn]= useState(6);

    const [duration, setDuration]= useState(10);


    function handleInitialInvestment(event){
        setInitialInvestment(event.target.value);

    }
    function handleAnnualInvestment(event){
        setAnnualInvestment(event.target.value);

    }
    function handleExpectedReturn(event){
        setExpectedReturn(event.target.value);

    }
    function handleDuration(event){
        setDuration(event.target.value);

    }

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" onChange={handleInitialInvestment}  value={initialInvestment}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type= "number" onChange={handleAnnualInvestment} value={annualInvestmemt}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type= "number" onChange={handleExpectedReturn} value={expextedReturn}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type= "number" onChange={handleDuration} value={duration} />
                </p>
            </div>

        </section>
    )
}