import Image from "next/image";
  
export default function Stages() {
    return (
        <div className="flex justify-center bg-customwhite1 px-[60px] py-12">

            {/* ********************************* */}
            <div className="flex flex-col gap-6 -mr-10">
                <div className="bg-white w-[392px] rounded-xl p-5">
                    <div className="flex items-center gap-6">
                        <Image src="/Stages/analysis.svg" width={48} height={58} alt="analysis"/>
                        <p className="font-semibold text-xl">Analysis</p>
                    </div>
                    <p className="text-sm">We craft precise technical specs, aligning with<br/> your business, technology, and user<br/> requirements.</p>
                </div>

                <div className="bg-white w-[392px] rounded-xl p-5">
                    <div className="flex items-center gap-6">
                        <Image src="/Stages/design.svg" width={48} height={58} alt="design" />
                        <p className="font-semibold text-xl">Design</p>
                    </div>
                    <p className="text-sm">We adapt the customer&#39;s corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
                </div>

                <div className="bg-white w-[392px] rounded-xl p-5">
                    <div className="flex items-center gap-6">
                        <Image src="/Stages/dev.svg" width={48} height={58} alt="dev" />
                        <p className="font-semibold text-xl">Development</p>
                    </div>
                    <p className="text-sm">We adapt the customer&#39;s corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
                </div>
            </div>

            {/* ********************************* */}
           
            <Image src="/Stages/phone.svg" width={440} height={564} alt="phone" />
            
            {/* ********************************* */}
            <div className="flex flex-col gap-6 -ml-10">

            <div className="bg-white w-[392px] rounded-xl p-5">
                    <div className="flex items-center gap-6">
                        <Image src="/Stages/testing.svg" width={48} height={58}  alt="testing"/>
                        <p className="font-semibold text-xl">Testing</p>
                    </div>
                    <p className="text-sm">We adapt the customer&#39;s corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
                </div>

                <div className="bg-white w-[392px] rounded-xl p-5">
                    <div className="flex items-center gap-6">
                        <Image src="/Stages/launching.svg" width={48} height={58} alt="stages"/>
                        <p className="font-semibold text-xl">Launching</p>
                    </div>
                    <p className="text-sm">We adapt the customer&#39;s corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
                </div>

                <div className="bg-white w-[392px] rounded-xl p-5">
                    <div className="flex items-center gap-6">
                        <Image src="/Stages/support.svg" width={48} height={58} alt="support"/>
                        <p className="font-semibold text-xl">Support</p>
                    </div>
                    <p className="text-sm">We adapt the customer&#39;s corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
                </div>
            </div>
            
        </div>
    )
}
