import SingleBlog from '@/components/Blog/SingleBlog';
import type { Blog } from '@/types/blog';

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

export async function RelatedArticles() {
  return (
    <section>
      <h2 className='mt-25 mb-10 max-w-[579px] text-[34px] leading-[45px] font-semibold text-white'>
        Related Articles
      </h2>

      <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
        {demoPosts.slice(0, 3).map((blog, i) => (
          <SingleBlog key={blog._id || i} blog={blog} />
        ))}
      </div>
    </section>
  );
}
