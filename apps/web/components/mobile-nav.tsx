import * as React from 'react'
import Link from 'next/link'

import type { MainNavItem } from './main-nav'
import { useLockBody } from '@/hooks/use-lock-body'

interface MobileNavProps {
  items: MainNavItem[]
  children?: React.ReactNode
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody()

  return (
    <div
      className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-medium animate-in slide-in-from-bottom-80 md:hidden"
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-medium">
        <Link href="/" className="flex items-center space-x-2">
          Open UI
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  )
}
