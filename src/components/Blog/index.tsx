import type { Blog } from '@/types/blog';
import SectionTitle from '../Common/SectionTitle';
import SingleBlog from './SingleBlog';

const demoPosts: Blog[] = [
  {
    _id: 'blog-1',
    title: 'Designing faster AI workflows',
    slug: { current: 'designing-faster-ai-workflows' },
    metadata: 'A practical guide to startup-ready AI automation ideas.',
    mainImage: '/images/blog/blog-01.jpg',
    author: { name: 'Mia Jordan', slug: { current: 'mia-jordan' } },
    tags: ['AI', 'Productivity'],
    publishedAt: '2026-08-01',
  },
  {
    _id: 'blog-2',
    title: 'Shipping less code with better prompts',
    slug: { current: 'shipping-less-code-with-better-prompts' },
    metadata:
      'Prompt quality and product design can outperform complex tooling.',
    mainImage: '/images/blog/blog-02.jpg',
    author: { name: 'Noah Reed', slug: { current: 'noah-reed' } },
    tags: ['Prompting', 'Growth'],
    publishedAt: '2026-07-15',
  },
  {
    _id: 'blog-3',
    title: 'From prototype to polished launch',
    slug: { current: 'from-prototype-to-polished-launch' },
    metadata: 'Use a lean process to validate your AI product before scaling.',
    mainImage: '/images/blog/blog-03.jpg',
    author: { name: 'Ava Brooks', slug: { current: 'ava-brooks' } },
    tags: ['Launch', 'Strategy'],
    publishedAt: '2026-06-28',
  },
];

export default function BlogSection() {
  return (
    <section className='lg:py-25 py-20'>
      <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
        <SectionTitle
          subTitle='Read Our Latest Blogs'
          title='Latest Blogs & News'
          paragraph='Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup.'
        />

        <div className='gap-7.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {demoPosts.slice(0, 3).map((blog: Blog, index: number) => (
            <SingleBlog key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
