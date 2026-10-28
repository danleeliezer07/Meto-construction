import { Hero } from '@/sections/Hero'
import { Stats } from '@/sections/Stats'
import { About } from '@/sections/About'
import { Services } from '@/sections/Services'
import { WhyChooseUs } from '@/sections/WhyChooseUs'
import { Projects } from '@/sections/Projects'
import { Process } from '@/sections/Process'
import { Testimonials } from '@/sections/Testimonials'
import { FAQ } from '@/sections/FAQ'
import { CTA } from '@/sections/CTA'
import { Contact } from '@/sections/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  )
}
