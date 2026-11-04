import Image from 'next/image';

import { FlipText } from '@/components/ui/flip-text';
import { projects } from '@/data/projects';

const linkClasses =
  'border-pacific-cyan/60 bg-surface-base hover:border-pacific-cyan hover:bg-pacific-cyan/10 mt-5 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold text-white transition';

/** Wireframe stand-in shown for projects that have no screenshot yet. */
function PlaceholderPreview() {
  return (
    <div className='border-blue-slate bg-surface-base/90 absolute inset-x-5 top-12 bottom-5 rounded-[18px] border p-3'>
      <div className='mb-3 h-3 w-20 rounded bg-white/10' />
      <div className='space-y-2'>
        <div className='h-2.5 w-full rounded bg-white/10' />
        <div className='h-2.5 w-4/5 rounded bg-white/10' />
        <div className='grid grid-cols-3 gap-2 pt-2'>
          <div className='h-16 rounded bg-white/10' />
          <div className='h-16 rounded bg-white/10' />
          <div className='h-16 rounded bg-white/10' />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id='projects'
      className='mx-auto max-w-6xl scroll-mt-24 px-4 pb-20 md:px-8 xl:px-0'
    >
      <div className='mb-10 text-center'>
        <p className='text-pale-slate text-xs font-semibold tracking-[0.28em] uppercase'>
          Featured Projects
        </p>
        <FlipText className='mt-3 text-3xl font-black text-white sm:text-4xl'>
          Some of My Recent Work
        </FlipText>
      </div>

      <div className='grid gap-6 lg:grid-cols-3'>
        {projects.map((project) => (
          <article
            key={project.id}
            className='group border-blue-slate bg-surface-base/85 hover:border-pacific-cyan overflow-hidden rounded-2xl border p-3 shadow-none transition duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)] motion-reduce:transition-none motion-reduce:hover:translate-y-0'
          >
            <div className='border-blue-slate bg-surface-raised/85 mb-4 rounded-xl border p-2'>
              <div
                className={`relative h-52 overflow-hidden rounded-lg bg-gradient-to-br ${project.accent} transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
              >
                <div className='text-alabaster-grey absolute top-4 left-4 text-[10px] font-semibold tracking-[0.25em] uppercase'>
                  {project.id}
                </div>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} preview`}
                    fill
                    sizes='(min-width: 1024px) 31vw, 90vw'
                    className='object-cover'
                  />
                ) : (
                  <PlaceholderPreview />
                )}
              </div>
            </div>

            <div className='px-2 pb-2'>
              <h3 className='text-xl font-bold text-white'>{project.name}</h3>
              <p className='text-pale-slate mt-2 text-sm leading-6'>
                {project.description}
              </p>
              {project.url ? (
                <a
                  href={project.url}
                  target='_blank'
                  rel='noreferrer'
                  className={linkClasses}
                >
                  View Project <span>→</span>
                </a>
              ) : (
                /* TODO: unreleased project; this control has no destination. */
                <button type='button' className={linkClasses}>
                  View Project <span>→</span>
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
