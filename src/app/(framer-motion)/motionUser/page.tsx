import UserResizable from "@/componentsUi/components-user/UserResizable";
import MotionBox1 from "@/componentsUi/components/MotionBox1";

export default function Home() {
  return (
    <div className="">
      <div className="text-[20px] container mt-96 mx-[200px] flex flex-col gap-[40em] mb-96">
        <UserResizable />
        <MotionBox1 />
      </div>
    </div>
  );
}
