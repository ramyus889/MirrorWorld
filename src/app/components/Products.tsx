import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import useCustomHooks from "../hooks/useCustomHooks";

export default function App() {
  const { tabs } = useCustomHooks();
  React.useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div className="flex place-content-center mt-[200px]">
      <div className="flex  flex-col w-[22rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem] xl:w-[78rem]">
        <div className="text-center">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-[36px] mb-5"
          >
            Products
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[18px] text-slate-500 mb-10"
          >
            Integrate under 15 minutes, support multi-chain right within your
            app
          </div>
        </div>
        <Tabs
          size="lg"
          data-aos="fade-up"
          data-aos-delay="300"
          aria-label="Options"
          items={tabs}
          color="primary"
          variant="underlined"
          className=""
        >
          {(item) => (
            <Tab
              key={item.id}
              title={
                <div className="text-[1.18rem] px-5 lg:px-[10px] xl:px-[30px]  ">
                  {item.label}
                </div>
              }
            >
              <Card
                data-aos="fade-up"
                data-aos-delay="400"
                className="rounded-[20px] px-5 "
              >
                <CardBody className="px-[20px] overflow-x-hidden sm:px-[64px] py-[24px]">
                  <div className="flex flex-col xl:flex-row gap-10 items-center justify-between">
                    <div className="">
                      <div className="flex flex-col gap-8 text-center lg:text-start">
                        <div
                          data-aos="fade-right"
                          data-aos-delay="500"
                          className="text-[30px] text-[#ddff1a] font-bold"
                        >
                          {item.title}
                        </div>
                        <div
                          data-aos="fade-right"
                          data-aos-delay="500"
                          className=" max-w-[40rem] w-full text-center lg:text-start border-b border-[#ffffff29] text-[#ffffff7a] pb-[33px] text-[1.11rem]"
                        >
                          {item.text}
                        </div>
                      </div>
                      <div className="flex place-content-center lg:place-content-start">
                        <ul className="list-disc mt-[32px] flex flex-col gap-5 ">
                          {item.list.map((item, index) => (
                            <li
                              data-aos="fade-right"
                              data-aos-delay="600"
                              key={index}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <video
                        data-aos="fade-left"
                        data-aos-delay="600"
                        autoPlay
                        loop
                        width={item.width}
                        height={item.height}
                        className="rounded-xl"
                      >
                        <source src={item.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
}
