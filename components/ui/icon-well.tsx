import * as React from "react";

import { cn } from "@/lib/utils";

function IconWell({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="icon-well"
      className={cn(
        "border-border/70 bg-accent text-accent-foreground inline-flex size-7 shrink-0 items-center justify-center rounded-md border [&_svg]:size-3.5",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { IconWell };
