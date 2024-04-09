import Image from 'next/image'
import { Button } from '@openui-org/react'

export default function Header() {
  return (
    <header className="py-4 px-8 flex justify-between items-center">
      <figure className="m-0 flex items-center justify-center gap-2">
        <Image src="/openui-logo.svg" alt="Logo de open UI design system" title="Logo de open ui" width="50" height="50" />
        <h2 className="text-2xl font-medium">
          Open UI
        </h2>
      </figure>
      <div className="flex justify-center gap-8">
        <nav className="flex justify-center items-center gap-6">
          <a href="https://docs.openui.org" target="_blank">Docs</a>
          <a href="https://www.figma.com/community/file/1354464067434498042" target="_blank">Figma</a>
        </nav>
        <nav className="flex justify-center gap-4 items-center">
          <Button target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Github
          </Button>
        </nav>
      </div>
    </header>
  )
}