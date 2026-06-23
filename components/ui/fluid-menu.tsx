"use client"

import React, { useState } from "react"

interface MenuItemProps {
  children?: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
  isActive?: boolean
  label?: string
}

export function MenuItem({ children, onClick, disabled = false, icon, isActive = false, label }: MenuItemProps) {
  return (
    <button
      className={`relative block w-full h-16 text-center group
        ${disabled ? "text-charcoal/30 cursor-not-allowed" : "text-charcoal/70"}
        ${isActive ? "bg-forest/10" : ""}
      `}
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      <span className="flex flex-col items-center justify-center h-full gap-0.5">
        {icon && (
          <span className="h-5 w-5 transition-all duration-200 group-hover:[&_svg]:stroke-[2.5]">
            {icon}
          </span>
        )}
        {children && (
          <span className="text-[0.5rem] font-medium tracking-wide uppercase leading-none">
            {children}
          </span>
        )}
      </span>
    </button>
  )
}

export function MenuContainer({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = React.Children.toArray(children)

  const handleToggle = () => setIsExpanded(!isExpanded)
  const handleClose = () => setIsExpanded(false)

  return (
    <div className="relative w-[56px]" data-expanded={isExpanded}>
      <div className="relative">
        {/* Trigger — always visible */}
        <div
          className="relative w-14 h-14 bg-forest text-cream cursor-pointer rounded-full group will-change-transform z-50 shadow-lg shadow-forest/25"
          onClick={handleToggle}
        >
          {childrenArray[0]}
        </div>

        {/* Expanded items */}
        {childrenArray.slice(1).map((child, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-14 h-14 bg-mist border border-sand/60 will-change-transform shadow-md"
            onClick={handleClose}
            style={{
              transform: `translateY(${isExpanded ? -((index + 1) * 52) : 0}px)`,
              opacity: isExpanded ? 1 : 0,
              zIndex: 40 - index,
              clipPath: index === childrenArray.length - 2
                ? "circle(50% at 50% 50%)"
                : "circle(50% at 50% 55%)",
              transition: `transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${isExpanded ? '300ms' : '350ms'}`,
              pointerEvents: isExpanded ? 'auto' : 'none',
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-[-1]"
          onClick={handleClose}
        />
      )}
    </div>
  )
}
