import { FlipText } from '@/components/ui/flip-text';

export default function About() {
  return (
    <section
      id='about'
      className='mx-auto max-w-6xl scroll-mt-24 px-4 py-20 md:px-8 xl:px-0'
    >
      <div className='grid gap-12 lg:grid-cols-[1.1fr_0.9fr]'>
        <div>
          <p className='text-pale-slate mb-3 text-xs font-semibold tracking-[0.28em] uppercase'>
            About Me
          </p>
          <FlipText className='text-3xl font-black text-white sm:text-4xl'>
            Battle-tested discipline meets clean, modern code
          </FlipText>
          <div className='border-alabaster-grey/25 bg-alabaster-grey/[0.12] mt-5 max-w-lg rounded-xl border p-4 backdrop-blur-[2px]'>
            <p className='text-pale-slate text-base leading-7'>
              Writing clean, reliable code requires more than knowing syntax; it
              demands consistency, structure, and accountability. Having
              operated under demanding conditions where precision and timing
              were critical to mission success, every project is approached with
              thorough planning, strict adherence to standards, and rigorous
              testing before deployment.
            </p>
          </div>
          {/* TODO: this control has no destination yet. */}
          <button
            type='button'
            className='border-pacific-cyan/60 hover:border-pacific-cyan hover:bg-pacific-cyan/10 mt-8 rounded-lg border bg-transparent px-5 py-3 text-sm font-semibold text-white transition'
          >
            Learn More About Me <span className='ml-2'>→</span>
          </button>
        </div>

        <div className='flex items-center'>
          <div className='max-w-xl'>
            <FlipText className='text-xl font-bold text-white'>
              U.S. Army Veteran &amp; Full-Stack Developer
            </FlipText>
            <div className='border-alabaster-grey/25 bg-alabaster-grey/[0.12] mt-5 rounded-xl border p-4 backdrop-blur-[2px]'>
              <p className='text-pale-slate text-base leading-7'>
                Bridging military discipline, logistics problem-solving, and
                modern software engineering. Currently pursuing an A.S. in
                Computer Science while building responsive, accessible web
                applications. Focused on clean architecture, reliable delivery,
                and high-impact code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
