import Image from "next/image";

export default function Team() {
    return (
        <div className="flex justify-between bg-customwhite1 pt-[40px] px-[60px]">
            <div className="flex flex-col gap-6 h-[408px] w-[570px]">
                <p className="font-bold text-4xl">Our team</p>
                <p className="text-sm w-[600px] font-medium">Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</p>
                <div className="flex w-[600px] py-2 gap-4">
                    <div className="w-[184px]"><p className="font-bold text-5xl">28</p><p className="font-medium text-sm  text-customWhite2">team members</p></div>
                    <div className="w-[184px]"><p className="font-bold text-5xl">+100</p><p className="font-medium text-sm  text-customWhite2">projects</p></div>
                    <div className="w-[184px]"><p className="font-bold text-5xl ">7 years</p><p className="font-medium text-sm text-customWhite2">in IT sphere</p></div>
                </div>
                <p className="w-[600px] font-medium text-sm">All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It's expensive but worth it</p>
            </div>

            {/* ****************************************** */}
            <Image src="/groupphoto.svg" width={550} height={408}/>
            
        </div>
    )
}
