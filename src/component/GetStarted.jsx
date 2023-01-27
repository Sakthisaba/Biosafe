import styles from '../style.js'
import Button from './Button.jsx';
import Register from './Register.jsx'
function GetStarted()
{
    
    
    return(
        <div className={`flex md:flex-row flex-col ${styles.paddingY} ml-2 px-6 sm:px-16 `}>

            <div className={`flex flex-col md:650px`}>
             <h2 className={`font-poppins ${styles.heading2}`}>Ready For Experiencing <br></br>the Safest Authentication?</h2>
              <div className={`flex justify-start align-start`}><Register styles={` mx-[10px] w-[200px]`}></Register> </div>
            </div>
            <div>
                
              
            </div>
        </div>
    )

}

export default GetStarted;