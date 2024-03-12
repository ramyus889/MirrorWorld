import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

type Variant = "solid" | "bordered" | "light";

export default function App() {
  const variants: Variant[] = ["solid", "bordered", "light"];

  return (
    <div className="flex flex-col flex-wrap gap-4">
      {variants.map((variant) => (
        <Breadcrumbs key={variant} variant={variant}>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Music</BreadcrumbItem>
          <BreadcrumbItem>Artist</BreadcrumbItem>
          <BreadcrumbItem>Album</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>
      ))}
    </div>
  );
}
