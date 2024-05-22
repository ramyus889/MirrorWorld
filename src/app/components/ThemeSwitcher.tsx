import React from "react";
import { Button, Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";

export default function App() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="flex gap-5 items-center">
      <Switch
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        size="lg"
        color="success"
        endContent={<BiMoon />}
        startContent={<BiSun />}
      ></Switch>
    </div>
  );
}
