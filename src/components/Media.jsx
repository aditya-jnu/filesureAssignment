import Image from "next/image"

export default function Media() {
    return (
        <div className="bg-white py-[60px] flex flex-col gap-10">

             <div className="border-y-2 py-[60px] mx-[55px] flex justify-between">
                 <Image src="/Planet.svg" width={163} height={72}/>
                 <Image src="/Planet.svg" width={163} height={72}/>
                 <Image src="/Planet.svg" width={163} height={72}/>
                 <Image src="/Planet.svg" width={163} height={72}/>
                 <Image src="/Planet.svg" width={163} height={72}/>
                 <Image src="/Planet.svg" width={163} height={72}/>
             </div>

             <div className="flex justify-between px-[108px]">
                 <div className="flex flex-col gap-8">

                      <div className="flex flex-col gap-8">
                         <p className="font-bold text-4xl">Full development cycle</p>
                         <p className="font-medium text-sm">We use proven technologies</p>
                      </div>
                      <div className="flex flex-col gap-4">
                         <p className="font-semibold">Web</p>
                         <p className="w-[496px] text-customWhite2">PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ Nuxt / MySQL / Laravel / GO lang / django / Python</p>
                      </div>
                      <div className="flex flex-col gap-4">
                         <p className="font-semibold">Mobile</p>
                         <p className="w-[496px] text-customWhite2">Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>
                      </div>
          
                 </div>


                 <div className="w-[233px] flex flex-col">
                     <a href="/ios-development" className=" text-xl py-2 font-normal">
                         iOS development <span className="chevron-right text-customgreen" role="img" aria-label="chevron right">&gt;</span>
                     </a>
                     <a href="/android-development" className=" text-xl flex gap-3 py-3">
                         Android development <span className="chevron-right text-customgreen" role="img" aria-label="chevron right">&gt;</span>
                     </a>
                     <a href="/web-development" className="text-xl flex gap-3 py-3">
                         Web development <span className="chevron-right text-customgreen" role="img" aria-label="chevron right">&gt;</span>
                     </a>
                     <a href="/ui-ux" className=" text-xl flex gap-3 py-3">
                         UI/UX design <span className="chevron-right text-customgreen" role="img" aria-label="chevron right">&gt;</span>
                     </a>
                     <a href="/testing" className=" text-xl flex gap-3 py-3">
                         Testing <span className="chevron-right text-customgreen" role="img" aria-label="chevron right">&gt;</span>
                     </a>
                     <a href="/launch" className="text-xl flex gap-3 py-3">
                         Launch <span className="chevron-right text-customgreen" role="img" aria-label="chevron right">&gt;</span>
                     </a>
                     <a href="/it-consulting" className=" text-xl flex gap-3 py-3">
                         IT consulting <span className="chevron-right text-customgreen" role="img" aria-label="chevron right">&gt;</span>
                     </a>
                 </div>
             </div>

        </div>
    )
}
