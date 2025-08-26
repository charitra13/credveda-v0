"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ShowcaseSection() {
  return (
    <section
      id="showcase-section"
      className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent"
    >
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-center gap-8">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
            See CredVeda in action
          </h2>
          <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
            Watch how CredVeda transforms NBFC operations with intelligent analytics and seamless workflows.
          </p>
        </div>

        <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-white/5 to-transparent">
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full p-6"
              onClick={() => {
                const contactSection = document.getElementById('contact-section')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <Play className="w-8 h-8 ml-1" />
            </Button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Product Demo</h3>
            <p className="text-white/80">Discover how CredVeda streamlines NBFC analytics</p>
          </div>
        </div>
      </div>
    </section>
  )
}
