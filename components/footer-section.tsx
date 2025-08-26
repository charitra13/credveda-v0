"use client"

import { Twitter, Github, Linkedin } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4">CredVeda</div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">Stronger. Smarter. AI Integrated.</p>
        <div className="flex justify-start items-start gap-3">
          <a href="#" aria-label="Twitter" className="w-4 h-4 flex items-center justify-center">
            <Twitter className="w-full h-full text-muted-foreground" />
          </a>
          <a href="#" aria-label="GitHub" className="w-4 h-4 flex items-center justify-center">
            <Github className="w-full h-full text-muted-foreground" />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-4 h-4 flex items-center justify-center">
            <Linkedin className="w-full h-full text-muted-foreground" />
          </a>
        </div>
      </div>
      {/* Right Section: Navigation Links */}
      <div className="flex flex-col justify-start items-start gap-3 p-4 md:p-8">
        <h3 className="text-muted-foreground text-sm font-medium leading-5">Navigation</h3>
        <div className="flex flex-row justify-start items-center gap-6">
          <a href="#features-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
            Features
          </a>
          <a href="#showcase-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
            Showcase
          </a>
          <a href="#pricing-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
            Pricing
          </a>
          <a href="#contact-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
