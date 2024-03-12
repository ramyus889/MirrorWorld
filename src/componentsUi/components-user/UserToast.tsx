"use client";

import { Button } from "../components-ui/ui/button";
import { ToastAction } from "../components-ui/ui/toast";
import { useToast } from "../components-ui/ui/use-toast";
import { Toaster } from "../components-ui/ui/toaster";
export default function ToastDemo() {
  const { toast } = useToast();

  return (
    <div className="">
      <Toaster />
      <Button
        variant="outline"
        className="hover:shadow-[100px_63px_0px_#da6e29,-100px_-63px_0px_#91a5e5,-100px_63px_0px_#dd4482,100px_-63px_0px_#0b0f53] transition duration-500 py-[4em] px-[2em]"
        onClick={() => {
          toast({
            title: "Error not-found",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo" className="">
                Undo
              </ToastAction>
            ),
          });
        }}
      >
        Click to open Toast
      </Button>
    </div>
  );
}
