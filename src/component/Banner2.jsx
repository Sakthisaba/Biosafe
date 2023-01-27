import styles from '../style.js'
import phone from '../assets/robohand.png'
import pass from '../assets/pass.png'
import Button from '../component/Button'
import {featureCard } from '../static/index.js'
const Feauture = ({prop}) =>(
    <div className={`flex flex-row p-6 rounded-[20px] feature-card ss:w-[500px] w-300px`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={prop.icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {prop.title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {prop.content}
      </p>
    </div>
  </div>
)
export default function Banner2()
{

    return (
       <div id="about" className={` flex flex-col md:flex-row ${styles.paddingY} ml-2`}>
        <div className={`xl:px-0 sm:px-16 px-6 ss:w-[650px] w-[100%]`}>
        <h2 className={`font-poppins ${styles.heading3} text-white`}>We Enhance and Secure your <br className={`sm:block hidden`} />
        Biometrics using Blockchain</h2>
<p className={`max-w-[450px]  ${styles.paragraph}`}>By this technology, we can minimize the probability of
biometric data being leaked.Here are some of <span className={`text-white`}>the features of our product:</span></p>


        </div>
        <div className={`${styles.sectionImg}`}>
            {featureCard.map((feature,index)=>(
                <Feauture prop={feature}></Feauture>
            ))}
        </div>
        
       </div>
    )
}
