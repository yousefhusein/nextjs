'use client'

import React from 'react'
import { GoMoon as Moon, GoSun as Sun } from 'react-icons/go'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const switchTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  return (
    <button type="button" className="border border-gray-600 bg-transparent ring-0 outline-none w-12 h-12 rounded-full inline-grid place-content-center relative select-none" onClick={switchTheme}>
      <Sun className="transition-all col-start-1 row-start-1 rotate-0 opacity-100 dark:rotate-90 dark:opacity-0" fontSize={28} />
      <Moon className="transition-all col-start-1 row-start-1 -rotate-90 opacity-0 dark:rotate-90 dark:opacity-100" fontSize={28} />
    </button>
  )
}
