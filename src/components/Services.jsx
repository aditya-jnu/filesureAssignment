import Image from "next/image"
export default function Services() {
    return (
        <div className="flex flex-col bg-customwhite1 h-[690px]">

        {/* ***** NAVIGATION BAR ******** */}
        <div className="px-[108px] mt-4 z-50">
            <div className="flex items-center h-[92px] py-4 px-6 border rounded-xl gap-20 shadow-custom bg-white">
                <div><Image src="/logo.svg" width={20} height={10} className="w-44 h-[60px]" alt="logo"/></div>
                <div className="flex gap-6 w-[503px] text-sm">
                    <p>Services</p><p>Media</p><p>Cases</p><p>FAQ</p><p>Contacts</p>
               </div>
               <address className="flex gap-8 w-[337px]" style={{ fontStyle: 'normal' }}>
                    <div className="flex gap-2 w-[154px] items-center">
                        <Image src="/phone.svg" width={24} height={24} alt="Phone Icon"/>
                        <a href="tel:+91000000000" className="text-customgreen text-sm">+91 000000000</a>
                   </div>
                   <div className="flex gap-2 w-[154px] items-center">
                        <Image src="/mail.svg" width={24} height={24} alt="Mail Icon"/>
                        <a href="mailto:demo@gmail.com" className="text-customgreen text-sm">demo@gmail.com</a>
                   </div>
               </address>
            </div>
        </div>
  
        {/* ***************************** */}
        <div className="flex relative px-[108px]">

          <div className="mt-6">

             {/* first section */}
             <div className="w-[600px] flex flex-col gap-5">
                <p className="text-4xl font-extrabold">
                   <span className="text-yellow-500">User-Centric Excellence</span>
                   : Our App Development services Tackles Your Pain Points
               </p>
               <p className=" text-[18px] w-[600px]">
                    Experience a Seamless Digital Journey with
                    <span className="text-customgreen"> Desun</span> - 
                    Where Every Line of Code Resolves Your Challenges and
                   <span className="text-yellow-500"> Elevates Your App Experience </span>
                   to Unparalleled Heights.
               </p>
             </div>
  
             <div className=" border flex flex-col gap-4 rounded-xl p-6 bg-white mt-10">
               <p className="font-bold">Leave your contacts and we will call you back<br/>
                within 30 minutes</p>
                <form className='rounded-xl bg-white flex flex-col gap-2'>
                <div className='flex gap-4'>
                    <div className='flex flex-col'>
                         <label htmlFor="fullname" className='text-customWhite2 text-sm'>Full name</label>
                         <input type="text" id='fullname' className=" border-b border-black"/>
                    </div>
                    <div className='flex flex-col'>
                         <label htmlFor="phone" className='text-customWhite2 text-sm'>Phone number</label>
                         <input type="text" id='phone' className=" border-b border-black" />
                    </div>
                </div>
                <div className='flex gap-4'>
                   <div className='flex flex-col'>
                         <label htmlFor="namebusiness" className='text-customWhite2 text-sm'>Business name</label>
                         <input type="text" id='namebusiness' className=" border-b border-black" />
                    </div>
                    <div className='flex flex-col'>
                         <label htmlFor="mail" className='text-customWhite2 text-sm'>Business mail</label>
                         <input type="text" id='mail' className=" border-b border-black"/>
                    </div>
                    <button className='text-white bg-customgreen rounded-xl items-end text-sm flex jusify-center px-3 py-1'>Get<br/>Consultation</button>
                </div>
    
                </form>
             </div>

          </div>

          {/* second section */}
          <div className="absolute  -top-28 right-0">
            <Image src="/Gropu.svg" width={624} height={672} alt="mobileimg"/>
          </div>
  
        </div>
  
      </div>
    )
}
