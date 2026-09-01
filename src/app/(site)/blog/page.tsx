import BlogGridContainer from '@/components/Blog/BlogGridContainer';
import Breadcrumb from '@/components/Breadcrumb';
import type { Blog } from '@/types/blog';
import { Metadata } from 'next';
import { integrations, messages } from '../../../../integrations.config';

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

export const metadata: Metadata = {
  title: 'Blog | AI Tool - Next.js Template for AI Tools',
  description: 'This is Blog page for AI Tool',
};

export default async function BlogPage() {
  return (
    <>
      <Breadcrumb pageTitle='Blog Grid' />

      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
          {integrations?.isBlogEnabled ? (
            <BlogGridContainer blogs={demoPosts} />
          ) : (
            <div>{messages.blog}</div>
          )}
        </div>
      </section>
    </>
  );
}
