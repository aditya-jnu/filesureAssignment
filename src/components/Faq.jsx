import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "./ui/accordion";

export default function Faq() {
    return (
        <div className="flex flex-col gap-10 py-20 px-[108px] border">

            <p className="font-bold text-4xl">FAQ</p>

            <Accordion type="single" collapsible className="flex gap-6">

                <div className="w-1/2">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is the cost of a mobile application?</AccordionTrigger>
          <AccordionContent>
             Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Do you provide a guarantee for the mobile application?</AccordionTrigger>
          <AccordionContent>
             Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
                </div> 
                <div className="w-1/2">
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How long will development take?</AccordionTrigger>
                            <AccordionContent>
                              Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>I will not tell my idea, do you guarantee confidentiality?</AccordionTrigger>
                            <AccordionContent>
                              Yes. It adheres to the WAI-ARIA design pattern.
                           </AccordionContent>
                    </AccordionItem>
                </div>
                
           </Accordion>
        </div>
    )
}
