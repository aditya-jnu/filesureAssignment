import Image from "next/image"
export default function Contacts() {
    return (
        <div className="flex justify-center text-white px-20 mb-10">
             <div className=' h-[311px] bg-black flex flex-col gap-10 items-center rounded-xl p-6'>

                {/* ************************ */}
                <Image src="/Footer/logofooter.svg" width={290} height={113} alt="logo"/>

                 {/* *********************** */}
                <address className="flex gap-44" style={{ fontStyle: 'normal' }}>

                   <div className="flex flex-col gap-2 ">
                         <p className="flex gap-2 text-customWhite2 text-sm items-center"><Image src="/Footer/phone.svg" width={24} height={24} alt="Phone Icon"/>Contact nums</p>
                         <a href="tel:+91000000000">+91 000000000</a>
                   </div>
                   <div className="flex flex-col gap-2 ">
                         <p className="flex gap-2 text-customWhite2 text-sm items-center"><Image src="/Footer/mail.svg" width={24} height={24} alt="Mail Icon"/>Gmail</p> 
                         <a href="mailto:demo@gmail.com">demo@gmail.com</a>
                   </div>
                   <div className="flex flex-col gap-2 ">
                         <p className="flex gap-2 text-customWhite2 text-sm items-center"><Image src="/Footer/location.svg" width={24} height={24} alt="Address Icon"/>Address</p> 
                         <a href="link">Mumbai, India</a>
                   </div>
                   <div className="flex flex-col gap-2">
                         <p className="flex gap-2 text-customWhite2 text-sm items-center"><Image src="/Footer/location.svg" width={24} height={24} alt="req icon"/>Leave a request</p> 
                         <a href="mailto:demo@gmail.com">Leave a request</a>
                   </div>
                </address>

                {/* ********************** */}
                <p className="text-sm">We work throughout the world</p>
             </div>
        </div>
    )
}
