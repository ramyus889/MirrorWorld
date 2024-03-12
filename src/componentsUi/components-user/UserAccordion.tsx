import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components-ui/ui/accordion";

const UserAccordion = () => {
  return (
    <div className=" w-[50%]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What kind of content can I build with ILLA Cloud?
          </AccordionTrigger>
          <AccordionContent>
            You can build any internal application or AI tool you need, and you
            can also integrate AI with internal applications. For example, a
            dashboard, an admin panel, file content management, customer
            management system, text generation tool, image generation tool,
            email generation tool, and so on.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Who can use ILLA Cloud?</AccordionTrigger>
          <AccordionContent>
            Whether you are a product manager, full-stack developer, project
            manager, data analyst...anyone can use ILLA Cloud to build tools:
            From designing front-end interfaces with drag-and-drop components to
            integrating with data sources and generating queries using AI
            assistance, ILLA provides a streamlined experience that removes
            unnecessary complexities. You don&aops;t need to be a tech expert to
            create your own applications.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How can I benefit from ILLA Cloud?
          </AccordionTrigger>
          <AccordionContent>
            ILLA AI not only reduces the cost of building your tools but also
            integrates any AI capabilities you desire, making your work more
            efficient and enabling you to generate more valuable content in less
            time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Can I customize the AI Agent for my specific business needs?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can! AI Agent is based on a large language model and can be
            customized to perform specific tasks. You can define the behavior of
            the AI Agent based on your business requirements. By using ILLA
            Builder, you can feed data into the AI Agent and train it to
            accomplish designated tasks such as text processing, image
            recognition, and natural language processing.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            What data sources does ILLA support?
          </AccordionTrigger>
          <AccordionContent>
            ILLA supports integration with a variety of data sources, including
            PostgreSQL, MongoDB, REST API, GraphQL, Google Sheets, and more. You
            can swiftly connect to any data source without writing code,
            enabling seamless access to your desired data.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Is there any technical support available for ILLA Cloud users?
          </AccordionTrigger>
          <AccordionContent>
            Yes, ILLA Cloud offers technical support to its users. If you
            encounter any issues or have questions about the platform&aops;s
            features, you can reach out to our support team for assistance. We
            are dedicated to helping you have a seamless experience with ILLA
            Cloud.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default UserAccordion;
