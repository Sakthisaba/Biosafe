import styles from '../style.js'
import phone from '../assets/robohand.png'
import pass from '../assets/pass.png'
import lock from '../assets/lock.png'
import style from '../style.js';
function Banner()
{

    return (
        // <div className={`flex md:flex-row flex-col`}>

        //     <div className={`flex flex-row`}>
        //         <div className={`bg-discount-gradient rounded-[10px] px-4 py-[6px] mb-2 flex items-center  text-white`}> 'toggle' is assigned a value but never used </div>
        //     </div> 
        //     <div></div>
        // </div>

        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} ml-2`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className={`flex flex-row items-center py-[6px] px-6 bg-discount-gradient gr mb-2`}>
            <img src={lock} alt="discount" className="w-[32px] h-[32px]" />{" "}
            <p className={`${styles.paragraph} ml-2`}>
              Passwordless {" "}
              <span className="text-white ">authentication</span>
            </p>
          </div>
          
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[48px] text-white ss:leading-[100.8px] leading-[75px]`}>
            The Next <br className="sm:block hidden" />{" "}
            
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          
        </div>

        <h1 className={`font-poppins font-semibold ss:text-[72px] text-[48px] text-white ss:leading-[100.8px] leading-[75px] w-full`}>
          Authentication
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We integrating  biometrics with blockchain technology which is a viable solution 
        to secure biometrics.It Ensure the data itself is a lot more secure. 
        </p>
      
        </div>

        <div className={`flex ${style.flexCenter} flex-1 flex ${styles.flexCenter} md:my-0 my-10` }>

            
            <img src={phone} className=" w-[80%] sm:w-full z-[5] relative"></img>
            <div className="absolute z-[0] w-[10%] h-[30%] md:w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[60%] h-[60%] rounded-full white__gradient buttom-40" />
            <div className="absolute z-[0] w-[30%] h-[30%] blue__gradient" />
            </div>
         
        </section>
    )
}

export default Banner;