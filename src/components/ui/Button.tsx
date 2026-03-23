import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "default", ...props }, ref) => {
    let classes = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground disabled:pointer-events-none disabled:opacity-50 "
    
    if (variant === "primary") {
      classes += "bg-cta text-cta-text hover:bg-cta-hover shadow-sm "
    } else if (variant === "secondary") {
      classes += "border border-input-border bg-transparent hover:bg-section-alt text-foreground "
    } else if (variant === "ghost") {
      classes += "hover:bg-section-alt hover:text-foreground text-foreground "
    }

    if (size === "default") {
      classes += "h-11 px-6 py-2 "
    } else if (size === "sm") {
      classes += "h-9 px-4 text-xs "
    } else if (size === "lg") {
      classes += "h-14 px-8 text-base "
    }

    return (
      <button
        ref={ref}
        className={classes + className}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
