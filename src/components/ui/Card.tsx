import * as React from "react"

export function Card({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`rounded-2xl bg-card text-[#F4EAC1] shadow-md shadow-foreground/5 ${className}`} {...props}>
      {children}
    </div>
  )
}
export function CardContent({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-8 ${className}`} {...props}>{children}</div>
}
