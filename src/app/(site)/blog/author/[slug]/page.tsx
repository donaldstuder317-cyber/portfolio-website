import Breadcrumb from '@/components/Breadcrumb';
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
];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;

  return {
    title: `Author: ${slug} | Blog`,
    description: `Author: ${slug} | Blog`,
  };
}

export default async function AuthorPage(props: Props) {
  const params = await props.params;
  const { slug } = params;

  return (
    <>
      <Breadcrumb pageTitle={slug.replace('-', ' ')} />

      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
          <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
            {demoPosts.map((blog) => (
              <article
                key={blog._id}
                className='rounded-2xl border border-white/10 bg-white/5 p-6'
              >
                <h3 className='text-xl font-semibold text-white'>
                  {blog.title}
                </h3>
                <p className='mt-3 text-sm text-white/70'>{blog.metadata}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
