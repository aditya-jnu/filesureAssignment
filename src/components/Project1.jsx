import Image from "next/image"

export default function Project1() {
    return (
        <div className="flex mt-8">

            {/* **************** */}
            <div className=" flex flex-col gap-8">
                <p className="text-4xl font-bold">Project 1</p>
                <p className="w-[600px] text-sm">Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels</p>
                <p className="text-lg">Business analysis <span className="text-yellow-500">/</span> iOS <span className="text-yellow-500">/</span> Android <span className="text-yellow-500">/</span> QA <span className="text-yellow-500">/</span> UI/UX Design</p>
                <div className="flex gap-8">
                    <div className="flex gap-2">
                        <Image src="/Cases/location.svg" width={24} height={24} alt="cases"/>
                        <p>India</p>
                    </div>
                    <div className="flex gap-2">
                        <Image src="/Cases/estate.svg" width={24} height={24} alt="cases"/>
                        <p>Real Estate</p>
                    </div>
                </div>
                <div className="flex gap-12">
                    <div><p className="font-bold text-2xl">400%</p><p className="text-customWhite2">User Growth</p></div>
                    <div><p className="font-bold text-2xl">+ 200 000</p><p className="text-customWhite2">Active users</p></div>
                </div>
                <div className="flex gap-4">
                    <Image src="/Cases/ios.svg"  width={148} height={40} alt="ios"/>
                    <Image src="/Cases/playstore.svg"  width={148} height={40} alt="android"/>

                </div>
            </div>

            {/* **************** */}
            <div>
                <Image src="/project1.svg" width={446} height={449} alt="Project 1"/>
            </div>

        </div>
    )
}
