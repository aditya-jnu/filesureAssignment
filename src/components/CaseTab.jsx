import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import Project1 from "./Project1"

export default function CaseTab() {
    return (
        <Tabs defaultValue="project 1" >
            <TabsList>
                <TabsTrigger value="project 1">Project 1</TabsTrigger>
                <TabsTrigger value="project 2">Project 2</TabsTrigger>
                <TabsTrigger value="project 3">Project 3</TabsTrigger>
                <TabsTrigger value="project 4">Project 4</TabsTrigger>
            </TabsList>
            <TabsContent value="project 1"><Project1/></TabsContent>
            <TabsContent value="project 2">Project 2</TabsContent>
            <TabsContent value="project 3">Project 3</TabsContent>
            <TabsContent value="project 4">Project 4</TabsContent>
        </Tabs>
    )
}




