// Updated Switch Component
import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

function Switch({
    className,
    checkedColor = "bg-primary",
    uncheckedColor = "bg-input",
    thumbColor = "bg-background",
    checked,
    onCheckedChange, // Use Radix's prop name
    ...props
}) {
    return (
        <SwitchPrimitive.Root
            className={cn(
                `peer inline-flex h-6 w-10 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50`,
                `data-[state=checked]:bg-cyan-900 data-[state=unchecked]:bg-gray-200`,
                `dark:data-[state=unchecked]:bg-input/80`,
                className
            )}
            checked={checked}
            onCheckedChange={onCheckedChange}
            {...props}
        >
            <SwitchPrimitive.Thumb
                className={cn(
                    `${thumbColor}  pointer-events-none block size-5 rounded-full ring-0 transition-transform`,
                    `data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0`,
                    `data-[state=checked]:bg-white data-[state=unchecked]:${checkedColor}`,
                    `dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground`
                )}
            />
        </SwitchPrimitive.Root>
    );
}

export { Switch };
