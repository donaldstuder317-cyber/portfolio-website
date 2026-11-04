import { FlipText } from '@/components/ui/flip-text';
import { highlights } from '@/data/highlights';

export default function Highlights() {
  return (
    <section
      id='skills'
      className='mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 md:px-8 xl:px-0'
    >
      <div className='mb-10 text-center'>
        <FlipText className='mt-3 text-3xl font-black text-white sm:text-4xl'>
          Built for Execution
        </FlipText>
      </div>

      <div className='grid gap-6 md:grid-cols-3'>
        {highlights.map(({ Icon, stat, title, description }) => (
          <article
            key={title}
            className='group border-blue-slate bg-surface-base/85 hover:border-pacific-cyan rounded-2xl border border-b-8 p-4 shadow-none transition duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] motion-reduce:transition-none motion-reduce:hover:translate-y-0'
          >
            <div className='bg-surface-raised text-alabaster-grey mb-5 flex h-9 w-9 items-center justify-center rounded-full'>
              <Icon size={36} aria-hidden='true' />
            </div>
            <p className='text-4xl font-black text-white'>{stat}</p>
            <h3 className='mt-1 text-sm font-bold text-white'>{title}</h3>
            <p className='text-pale-slate/70 mt-2 text-xs leading-5'>
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
