import Breadcrumb from '@/components/Breadcrumb';
import { getPost, imageBuilder } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { RelatedArticles } from './_components/related-articles';
import { SharePost } from './_components/share-post';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const post = await getPost(slug);
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  if (post) {
    return {
      title: `${post.title || 'Single Post Page'} | ${siteName}`,
      description: `${post.metadata?.slice(0, 136)}...`,
      author: authorName,

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },

      openGraph: {
        title: `${post.title} | ${siteName}`,
        description: post.metadata,
        url: `${siteURL}/blog/${post?.slug?.current}`,
        siteName: siteName,
        images: [
          {
            url: imageBuilder(post.mainImage).url(),
            width: 1800,
            height: 1600,
            alt: post.title,
          },
        ],
        locale: 'en_US',
        type: 'article',
      },

      twitter: {
        card: 'summary_large_image',
        title: `${post.title} | ${siteName}`,
        description: `${post.metadata?.slice(0, 136)}...`,
        creator: `@${authorName}`,
        site: `@${siteName}`,
        images: [imageBuilder(post?.mainImage).url()],
        url: `${siteURL}/blog/${post?.slug?.current}`,
      },
    };
  } else {
    return {
      title: 'Not Found',
      description: 'No blog article has been found',
    };
  }
}

export default async function BlogDetails(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <>
      <Breadcrumb pageTitle='Blog Details' />

      <section className='pt-20 pb-17.5 lg:pt-25 lg:pb-22.5 xl:pb-27.5'>
        <div className='relative mx-auto mb-10 aspect-97/44 w-full max-w-[1170px] overflow-hidden rounded-2xl px-4 sm:px-8 md:rounded-3xl xl:px-0'>
          <Image
            src={imageBuilder(post?.mainImage).url()}
            alt={post.title}
            fill
          />
        </div>

        <div className='mx-auto w-full max-w-[1170px]'>
          <div className='mx-auto max-w-[870px]'>
            <div className='mb-7.5 flex flex-wrap items-center justify-between gap-5'>
              <div className='flex flex-wrap items-center gap-2.5'>
                {post?.tags?.map((tag) => (
                  <span
                    key={tag}
                    className='cursor-pointer rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-[3px] text-xs font-medium duration-300 ease-out hover:border-white/25 hover:text-white'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className='flex flex-wrap items-center gap-4.5'>
                <div className='flex cursor-pointer flex-wrap items-center gap-2 duration-300 ease-in hover:text-white'>
                  <svg
                    className='fill-current'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10 8.75C7.65625 8.75 5.78125 6.90625 5.78125 4.65625C5.78125 2.40625 7.65625 0.5625 10 0.5625C12.3438 0.5625 14.2188 2.40625 14.2188 4.65625C14.2188 6.90625 12.3438 8.75 10 8.75ZM10 1.96875C8.4375 1.96875 7.1875 3.1875 7.1875 4.65625C7.1875 6.125 8.4375 7.34375 10 7.34375C11.5625 7.34375 12.8125 6.125 12.8125 4.65625C12.8125 3.1875 11.5625 1.96875 10 1.96875Z'
                      fill=''
                    />
                    <path
                      d='M16.5938 19.4688C16.2188 19.4688 15.875 19.1562 15.875 18.75V17.8438C15.875 14.5938 13.25 11.9688 10 11.9688C6.75 11.9688 4.125 14.5938 4.125 17.8438V18.75C4.125 19.125 3.8125 19.4688 3.40625 19.4688C3 19.4688 2.6875 19.1562 2.6875 18.75V17.8438C2.6875 13.8125 5.96875 10.5625 9.96875 10.5625C13.9688 10.5625 17.25 13.8437 17.25 17.8438V18.75C17.2813 19.125 16.9688 19.4688 16.5938 19.4688Z'
                      fill=''
                    />
                  </svg>

                  <Link
                    href={`/blog/author/${post?.author?.slug?.current}`}
                    className='text-sm font-medium'
                  >
                    {post?.author?.name}
                  </Link>
                </div>

                <div className='flex cursor-pointer flex-wrap items-center gap-2 duration-300 ease-in hover:text-white'>
                  <svg
                    className='fill-current'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17.5 3.3125H15.875V2.625C15.875 2.25 15.5625 1.90625 15.1562 1.90625C14.75 1.90625 14.4375 2.21875 14.4375 2.625V3.3125H5.53125V2.625C5.53125 2.25 5.21875 1.90625 4.8125 1.90625C4.40625 1.90625 4.09375 2.21875 4.09375 2.625V3.3125H2.5C1.4375 3.3125 0.53125 4.1875 0.53125 5.28125V16.1563C0.53125 17.2188 1.40625 18.125 2.5 18.125H17.5C18.5625 18.125 19.4687 17.25 19.4687 16.1563V5.25C19.4687 4.1875 18.5625 3.3125 17.5 3.3125ZM1.96875 9.125H4.625V12.2188H1.96875V9.125ZM6.03125 9.125H9.3125V12.2188H6.03125V9.125ZM9.3125 13.625V16.6875H6.03125V13.625H9.3125ZM10.7187 13.625H14V16.6875H10.7187V13.625ZM10.7187 12.2188V9.125H14V12.2188H10.7187ZM15.375 9.125H18.0312V12.2188H15.375V9.125ZM2.5 4.71875H4.125V5.375C4.125 5.75 4.4375 6.09375 4.84375 6.09375C5.25 6.09375 5.5625 5.78125 5.5625 5.375V4.71875H14.5V5.375C14.5 5.75 14.8125 6.09375 15.2187 6.09375C15.625 6.09375 15.9375 5.78125 15.9375 5.375V4.71875H17.5C17.8125 4.71875 18.0625 4.96875 18.0625 5.28125V7.71875H1.96875V5.28125C1.96875 4.96875 2.1875 4.71875 2.5 4.71875ZM1.96875 16.125V13.5938H4.625V16.6563H2.5C2.1875 16.6875 1.96875 16.4375 1.96875 16.125ZM17.5 16.6875H15.375V13.625H18.0312V16.1563C18.0625 16.4375 17.8125 16.6875 17.5 16.6875Z'
                      fill=''
                    />
                  </svg>

                  <span className='text-sm font-medium'>
                    {new Date(post?.publishedAt!)
                      .toDateString()
                      .split(' ')
                      .slice(1)
                      .join(' ')}
                  </span>
                </div>
              </div>
            </div>

            <h1 className='mb-7.5 text-[34px] leading-[45px] font-semibold text-white'>
              {post?.title}
            </h1>

            <div className='blog-details mb-12'>
              <PortableText value={post?.body || []} />
            </div>

            <SharePost title={post?.title} description={post?.metadata} />
          </div>

          <RelatedArticles />
        </div>
      </section>
    </>
  );
}
