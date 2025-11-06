import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AccordianForHome() {
  return (
    <div className="py-5 px-2 mt-10 max-w-2xl mx-auto">
      <h2 className=" font-semibold text-gray-800">FAQS</h2>
      <div className="acc">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Tech Stack Used</AccordionTrigger>
            <AccordionContent>
              The project is built using <strong>React.js</strong> for the
              frontend,
              <strong> Node.js</strong> and <strong>Express.js</strong> for the
              backend,
              <strong> Socket.IO</strong> for real-time communication, and
              <strong> Postgress SQL</strong> for database management.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Key Learnings</AccordionTrigger>
            <AccordionContent>
              - Real-time chat implementation using WebSockets (Socket.IO){" "}
              <br />
              - Structuring APIs and database queries efficiently with Express &
              Postgress SQL <br />
              - State management and UI updates in React <br />- Deployment
              workflow for full-stack applications
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordianForHome;
