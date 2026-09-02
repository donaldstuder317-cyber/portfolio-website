'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import headshot from '@/assets/my-headshot.jpeg';

const stats = [
  { value: '4+', label: 'Years Experience', tone: 'purple' },
  { value: '50+', label: 'Projects Completed', tone: 'blue' },
  { value: '30+', label: 'Happy Clients', tone: 'purple' },
  { value: '100%', label: 'Client Satisfaction', tone: 'blue' },
];

const skills = [
  { name: 'HTML', value: 95 },
  { name: 'CSS', value: 90 },
  { name: 'JavaScript', value: 95 },
  { name: 'React', value: 85 },
  { name: 'Next.js', value: 80 },
  { name: 'TypeScript', value: 85 },
  { name: 'Tailwind CSS', value: 90 },
  { name: 'Git', value: 85 },
];

const techIcons = [
  {
    name: 'HTML5',
    icon: (
      <svg
        viewBox='0 0 512 512'
        className='h-6 w-6 sm:h-7 sm:w-7'
        aria-label='HTML5 logo'
      >
        <polygon
          fill='#E44D26'
          points='107.644,470.877 74.633,100.62 437.367,100.62 404.321,470.819 255.778,512'
        />
        <polygon
          fill='#F16529'
          points='256,480.523 376.03,447.246 404.27,130.894 256,130.894'
        />
        <polygon
          fill='#EBEBEB'
          points='256,268.217 195.91,268.217 191.76,221.716 256,221.716 256,176.305 255.843,176.305 142.132,176.305 143.219,188.488 154.38,313.627 256,313.627'
        />
        <polygon
          fill='#EBEBEB'
          points='256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457 256,433.399'
        />
        <polygon
          fill='#FFFFFF'
          points='255.843,268.217 255.843,313.627 311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 349.2,268.217'
        />
        <polygon
          fill='#FFFFFF'
          points='255.843,176.305 255.843,204.509 255.843,221.605 255.843,221.716 365.385,221.716 369.46,176.305'
        />
      </svg>
    ),
  },
  {
    name: 'CSS3',
    icon: (
      <svg
        viewBox='0 0 512 512'
        className='h-6 w-6 sm:h-7 sm:w-7'
        aria-label='CSS3 logo'
      >
        <polygon
          fill='#1572B6'
          points='107.644,470.877 74.633,100.62 437.367,100.62 404.321,470.819 255.778,512'
        />
        <polygon
          fill='#33A9DC'
          points='256,480.523 376.03,447.246 404.27,130.894 256,130.894'
        />
        <polygon
          fill='#EBEBEB'
          points='256,268.217 195.91,268.217 191.76,221.716 256,221.716 256,176.305 142.132,176.305 154.38,313.627 256,313.627'
        />
        <polygon
          fill='#EBEBEB'
          points='256,386.153 205.227,372.55 201.994,336.333 156.409,336.333 162.771,407.634 255.791,433.457 256,433.399'
        />
        <polygon
          fill='#FFFFFF'
          points='255.843,176.305 255.843,221.716 365.385,221.716 361.399,268.217 255.843,268.217 255.843,313.627 357.348,313.627 348.937,407.634 255.843,433.435 255.843,386.191 306.49,372.521 311.761,313.627'
        />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    icon: (
      <svg
        viewBox='0 0 630 630'
        className='h-6 w-6 sm:h-7 sm:w-7'
        aria-label='JavaScript logo'
      >
        <rect width='630' height='630' fill='#F7DF1E' />
        <path
          fill='#000000'
          d='m165.65 526.4c10.1 5.8 22.8 9.6 37.7 9.6 32.2 0 53.2-16 53.2-51.5v-185.3h-37.4v181.3c0 19.3-8.8 27.2-22.8 27.2-11.4 0-18.7-3.9-23.7-7.9l-7 26.6zm164.7-6.2c16.1 9.2 38.6 15.8 61 15.8 40.5 0 65.5-20.2 65.5-52.6 0-30.7-18.7-44.2-49.8-57.6-26.6-11.4-38.6-19.7-38.6-32.9 0-11.8 9.6-21.5 28.1-21.5 15.3 0 28.5 5.3 37.3 10.5l8.3-28.5c-9.2-5.3-24.1-10.1-43.4-10.1-39.5 0-61 22.4-61 50.9 0 28.9 18.4 43.4 49.6 56.6 27.6 11.8 39 20.6 39 34.6 0 14-11.8 23.2-32.5 23.2-19.3 0-33.8-6.6-43.9-12.7l-10.6 24.8z'
        />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg
        viewBox='0 0 512 512'
        className='h-6 w-6 sm:h-7 sm:w-7'
        aria-label='TypeScript logo'
      >
        <path fill='#3178C6' d='M0 0h512v512H0z' />
        <path
          fill='#FFFFFF'
          d='M273.7 348.9h-47V452h-38.2V348.9H142V318h131.7v30.9zm77.9 105.7c-21.8 0-41.2-6.5-52.6-14.7l11.4-29.6c11.9 7.6 26.6 13.1 42.1 13.1 18.7 0 28.9-7.8 28.9-19.9 0-12.4-12.1-17.7-34.9-26.9-31.2-12.8-49.6-26.7-49.6-53.7 0-30.7 24.5-52.7 64.6-52.7 20 0 35.8 4.6 46.9 10.3l-10.5 29.1c-9.2-4.8-21.6-9-36.9-9-17.7 0-25.7 7.8-25.7 17.5 0 11.7 10.3 16.5 33.3 25.7 33.1 13.3 51.4 28.4 51.4 55.4-.1 31.9-25.3 54.4-66.4 54.4z'
        />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg
        viewBox='-11.5 -10.23174 23 20.46348'
        className='h-6 w-6 sm:h-7 sm:w-7'
        aria-label='React logo'
      >
        <circle cx='0' cy='0' r='2.05' fill='#61DAFB' />
        <g stroke='#61DAFB' strokeWidth='1' fill='none'>
          <ellipse rx='11' ry='4.2' />
          <ellipse rx='11' ry='4.2' transform='rotate(60)' />
          <ellipse rx='11' ry='4.2' transform='rotate(120)' />
        </g>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg
        viewBox='0 0 256 288'
        className='h-6 w-6 sm:h-7 sm:w-7'
        aria-label='Node.js logo'
      >
        <polygon fill='#5FA04E' points='128,0 256,72 128,144 0,72' />
        <polygon fill='#333333' points='256,72 256,216 128,288 128,144' />
        <polygon fill='#417E38' points='0,72 128,144 128,288 0,216' />
      </svg>
    ),
  },
];

const projects = [
  {
    id: '01',
    name: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI/UX',
    accent: 'from-pink-500/30 via-violet-500/10 to-transparent',
  },
  {
    id: '02',
    name: 'Task Management App',
    description: 'Collaborative task management application',
    accent: 'from-sky-500/30 via-cyan-500/10 to-transparent',
  },
  {
    id: '03',
    name: 'Crypto Dashboard',
    description: 'Real-time cryptocurrency tracking dashboard',
    accent: 'from-emerald-500/30 via-cyan-500/10 to-transparent',
  },
];

const backgroundFrameCount = 90;
const backgroundFrames = Array.from(
  { length: backgroundFrameCount },
  (_, index) => `/video/frames/frame_${String(index + 1).padStart(4, '0')}.jpg`,
);
const backgroundFrameSmoothing = 0.08;

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;

    const frames = backgroundFrames.map((src) => {
      const image = new window.Image();
      image.src = src;
      image.decoding = 'async';
      return image;
    });

    let animationFrame = 0;
    let targetIndex = 0;
    let currentIndex = 0;

    const renderFrame = (index: number) => {
      const frame = frames[index];
      if (!frame || !frame.complete || !frame.naturalWidth) {
        return;
      }

      const width = canvas.width;
      const height = canvas.height;
      const frameRatio = frame.naturalWidth / frame.naturalHeight;
      const viewportRatio = width / height;

      let drawWidth = width;
      let drawHeight = height;
      let offsetX = 0;
      let offsetY = 0;

      if (viewportRatio > frameRatio) {
        drawWidth = width;
        drawHeight = width / frameRatio;
        offsetY = (height - drawHeight) / 2;
      } else {
        drawHeight = height;
        drawWidth = height * frameRatio;
        offsetX = (width - drawWidth) / 2;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(frame, offsetX, offsetY, drawWidth, drawHeight);
    };

    const syncToScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
      targetIndex = Math.min(
        backgroundFrameCount - 1,
        Math.floor(clampedProgress * backgroundFrameCount),
      );
    };

    const render = () => {
      currentIndex += (targetIndex - currentIndex) * backgroundFrameSmoothing;
      const roundedIndex = Math.min(
        backgroundFrameCount - 1,
        Math.max(0, Math.round(currentIndex)),
      );

      renderFrame(roundedIndex);
      animationFrame = window.requestAnimationFrame(render);
    };

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      renderFrame(Math.round(currentIndex));
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);
    window.addEventListener('scroll', syncToScroll, { passive: true });
    window.visualViewport?.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    syncToScroll();
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener('scroll', syncToScroll);
      window.visualViewport?.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <main className='relative min-h-screen bg-transparent text-[color:var(--alabaster-grey)]'>
      <div className='pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden'>
        <canvas
          ref={canvasRef}
          aria-hidden='true'
          className='block h-full w-full brightness-[0.92]'
        />
      </div>

      <div className='relative z-10'>
        <section className='relative overflow-hidden'>
          <div className='relative mx-auto -mt-8 max-w-6xl px-4 pb-16 md:px-8 xl:px-0'>
            <div className='grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]'>
              <div className='max-w-xl'>
                <p className='typewriter-text mb-5 text-xs font-semibold tracking-[0.22em] text-[#a78bfa] uppercase'>
                  FULL STACK WEB DEVELOPER
                </p>

                <h1 className='typewriter-text text-4xl leading-tight font-black text-white sm:text-5xl xl:text-[4.2rem]'>
                  Donald Studer
                </h1>

                <p className='typewriter-text mt-3 max-w-md text-base leading-7 text-[#c5c3c6]'>
                  US Army Veteran
                  <span className='mt-1 block'>Aspiring Network Architect</span>
                </p>

                <div className='mt-8 flex flex-wrap gap-4'>
                  <button className='rounded-lg border border-[#4c5c68] bg-[#1e293b] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#1985a1] hover:text-[#1985a1]'>
                    View My Work <span className='ml-2'>→</span>
                  </button>
                  <button className='rounded-lg border border-[#1985a1]/60 bg-[#0f172a] px-6 py-3 text-sm font-semibold text-[#dcdcdd] transition hover:bg-[#1985a1] hover:text-white'>
                    Download CV <span className='ml-2'>↓</span>
                  </button>
                </div>

                <div className='mt-12'>
                  <p className='mb-4 text-[0.68rem] font-semibold tracking-[0.18em] text-[#dcdcdd] uppercase'>
                    Technologies I work with
                  </p>
                  <div className='flex flex-wrap gap-3'>
                    {techIcons.map((tech) => (
                      <div
                        key={tech.name}
                        className='flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] shadow-none'
                        title={tech.name}
                      >
                        {tech.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='relative flex min-h-[520px] items-center justify-center'>
                <div className='absolute h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,_rgba(167,139,250,0.52)_0%,_rgba(94,61,221,0.25)_35%,_rgba(15,23,42,0)_70%)] blur-[26px]' />
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='relative h-[280px] w-[280px] overflow-hidden rounded-full bg-[#0d1328] shadow-[0_0_34px_rgba(167,139,250,0.32),0_20px_40px_rgba(0,0,0,0.35)]'>
                    <Image
                      src={headshot}
                      alt='Alex headshot'
                      fill
                      priority
                      className='object-cover'
                      style={{ objectPosition: '50% 18%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mx-auto max-w-6xl px-4 py-20 md:px-8 xl:px-0'>
          <div className='grid gap-12 lg:grid-cols-[1.1fr_0.9fr]'>
            <div>
              <p className='mb-3 text-xs font-semibold tracking-[0.28em] text-[#c5c3c6] uppercase'>
                About Me
              </p>
              <h2 className='text-3xl font-black text-white sm:text-4xl'>
                I&apos;m passionate about creating digital solutions
              </h2>
              <p className='mt-5 max-w-lg text-base leading-7 text-[#c5c3c6]'>
                With 4+ years of experience in web development, I help
                businesses and individuals bring their ideas to life through
                efficient, elegant, and user-friendly code.
              </p>
              <button className='mt-8 rounded-lg border border-[#1985a1]/60 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-[#1985a1] hover:bg-[#1985a1]/10'>
                Learn More About Me <span className='ml-2'>→</span>
              </button>
            </div>

            <div className='grid gap-5 sm:grid-cols-2'>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className='rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-none'
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white ${
                      stat.tone === 'purple'
                        ? 'bg-gradient-to-br from-violet-500 to-indigo-500'
                        : 'bg-gradient-to-br from-sky-500 to-cyan-500'
                    }`}
                  >
                    {stat.value === '4+'
                      ? '✦'
                      : stat.value === '50+'
                        ? '</>'
                        : stat.value === '30+'
                          ? '◌'
                          : '⚑'}
                  </div>
                  <div className='text-3xl font-black text-white'>
                    {stat.value}
                  </div>
                  <div className='mt-2 text-sm text-[#c5c3c6]'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='mx-auto max-w-6xl px-4 pb-20 md:px-8 xl:px-0'>
          <div className='mb-10 text-center'>
            <p className='text-xs font-semibold tracking-[0.28em] text-[#c5c3c6] uppercase'>
              My Skills
            </p>
            <h2 className='mt-3 text-3xl font-black text-white sm:text-4xl'>
              Technologies I Master
            </h2>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            {skills.map((skill) => (
              <div
                key={skill.name}
                className='rounded-xl border border-white/10 bg-white/[0.02] p-4'
              >
                <div className='mb-3 flex items-center justify-between text-sm text-white'>
                  <span>{skill.name}</span>
                  <span className='text-[#c5c3c6]'>{skill.value}%</span>
                </div>
                <div className='h-2.5 w-full overflow-hidden rounded-full bg-[#1d2438]'>
                  <div
                    className='h-full rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400'
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='mx-auto max-w-6xl px-4 pb-20 md:px-8 xl:px-0'>
          <div className='mb-10 text-center'>
            <p className='text-xs font-semibold tracking-[0.28em] text-[#c5c3c6] uppercase'>
              Featured Projects
            </p>
            <h2 className='mt-3 text-3xl font-black text-white sm:text-4xl'>
              Some of My Recent Work
            </h2>
          </div>

          <div className='grid gap-6 lg:grid-cols-3'>
            {projects.map((project) => (
              <article
                key={project.id}
                className='overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3 shadow-none'
              >
                <div className='mb-4 rounded-xl border border-white/10 bg-white/[0.02] p-2'>
                  <div
                    className={`relative h-52 overflow-hidden rounded-lg bg-gradient-to-br ${project.accent}`}
                  >
                    <div className='absolute top-4 left-4 text-[10px] font-semibold tracking-[0.25em] text-[#dcdcdd] uppercase'>
                      {project.id}
                    </div>
                    <div className='absolute inset-x-5 top-12 bottom-5 rounded-[18px] border border-white/10 bg-white/[0.02] p-3'>
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
                  </div>
                </div>

                <div className='px-2 pb-2'>
                  <h3 className='text-xl font-bold text-white'>
                    {project.name}
                  </h3>
                  <p className='mt-2 text-sm leading-6 text-[#c5c3c6]'>
                    {project.description}
                  </p>
                  <button className='mt-5 inline-flex items-center gap-2 rounded-lg border border-[#1985a1]/60 bg-[#10192c] px-4 py-2 text-sm font-semibold text-white transition hover:border-[#1985a1] hover:bg-[#1985a1]/10'>
                    View Project <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className='mx-auto max-w-6xl px-4 pb-20 md:px-8 xl:px-0'>
          <div className='grid gap-8 rounded-[28px] border border-white/10 bg-white/[0.02] p-6 md:p-10 lg:grid-cols-[1fr_1.2fr]'>
            <div className='flex items-center'>
              <div>
                <p className='text-xs font-semibold tracking-[0.28em] text-[#c5c3c6] uppercase'>
                  Let&apos;s work together
                </p>
                <h2 className='mt-3 text-3xl font-black text-white sm:text-4xl'>
                  Have a project in mind?
                </h2>
                <button className='mt-8 rounded-lg bg-[#1985a1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#147e93]'>
                  Get In Touch <span className='ml-2'>→</span>
                </button>
              </div>
            </div>

            <div className='rounded-[24px] border border-white/10 bg-white/[0.02] p-6'>
              <div className='mb-5 flex items-start gap-4'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-[#1985a1]/20 text-xl text-[#1985a1]'>
                  “
                </div>
                <p className='text-lg leading-8 text-[#dcdcdd]'>
                  Donald is an exceptional developer who delivers high-quality
                  work on time. His attention to detail and problem-solving
                  skills are outstanding.
                </p>
              </div>

              <div className='mt-6 border-t border-white/10 pt-5'>
                <div className='font-semibold text-white'>Sarah Johnson</div>
                <div className='text-sm text-[#c5c3c6]'>CEO, TechStart</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
