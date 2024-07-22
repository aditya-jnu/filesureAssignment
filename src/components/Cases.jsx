import Image from "next/image";
import CaseTab from "./CaseTab";

export default function Cases() {
    return (
        <div className='bg-customwhite1 p-[108px] flex flex-col gap-20 py-16'>
            <div className="flex flex-col gap-8">

            {/* **************************************** */}
            <p className="font-bold text-4xl">Developed more than <span className="text-customgreen">100</span><br/> projects in <span className="text-customgreen">15</span> industries</p>

            {/* **************************************** */}
            <div className='flex gap-[25px]'>
                <div>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/smedia.svg" width={44} height={44}/>
                        <span className="font-medium">Social media</span>
                    </p>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/sport.svg" width={44} height={44}/>
                        <span className="font-medium">Fitness and sport</span>
                    </p>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/bank.svg" width={44} height={44}/>
                        <span className="font-medium">Bank</span>
                    </p>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/construction.svg" width={44} height={44}/>
                        <span className="font-medium">Construction</span>
                    </p>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/game.svg" width={44} height={44}/>
                        <span className="font-medium">Game projects</span>
                    </p>
                </div>
                <div>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/edu.svg" width={44} height={44}/>
                        <span className="font-medium">Education</span>
                    </p>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/auto.svg" width={44} height={44}/>
                        <span className="font-medium">Auto, transport</span>
                    </p>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/med.svg" width={44} height={44}/>
                        <span className="font-medium">Medicine, health</span>
                    </p>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/rest.svg" width={44} height={44}/>
                        <span className="font-medium">Restaurants, food delivery</span>
                    </p>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/market.svg" width={44} height={44}/>
                        <span className="font-medium">Marketplaces</span>
                    </p>
                </div>
                <div>
                   <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/ar.svg" width={44} height={44}/>
                        <span className="font-medium">AR technology</span>
                    </p>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/tv.svg" width={44} height={44}/>
                        <span className="font-medium">TV series</span>
                    </p>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/startup.svg" width={44} height={44}/>
                        <span className="font-medium">Startups</span>
                    </p>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/religion.svg" width={44} height={44}/>
                        <span className="font-medium">Religion</span>
                    </p>
                    <p className="flex items-center w-[391px] h-[44px] gap-4">
                        <Image src="/Cases/online.svg" width={44} height={44}/>
                        <span className="font-medium">Online courses</span>
                    </p>
                </div>
            </div>

            </div>


            {/* **************************************** */}
            <div>
                <div className="flex flex-col gap-6 h-[116px] w-[600px] border">
                    <p className="font-bold text-4xl">Projects we are proud of</p>
                    <p className="font-medium text-sm">Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership</p>
                </div>

                <div>
                    <CaseTab/>
                </div>
            </div>


        </div>
    )
}
