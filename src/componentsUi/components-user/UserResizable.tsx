import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components-ui/ui/resizable";
import Image from "next/image";
import img1 from "/public/img/Untitled1.png";
import img2 from "/public/img/Untitled2.png";
import img3 from "/public/img/Untitled3.png";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center ">
          <Image src={img1} alt="" width={200} height={200} />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center ">
              <Image src={img2} alt="" width={200} height={200} />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center ">
              <Image src={img3} alt="" width={200} height={200} />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
        <ResizableHandle />
      </ResizablePanel>

      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center ">
          <Image src={img1} alt="" width={200} height={200} />
        </div>
      </ResizablePanel>
      <ResizableHandle />
    </ResizablePanelGroup>
  );
}
