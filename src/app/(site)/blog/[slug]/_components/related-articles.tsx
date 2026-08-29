import SingleBlog from '@/components/Blog/SingleBlog';
import { getPosts } from '@/sanity/sanity-utils';

export async function RelatedArticles() {
  const posts = await getPosts();

  return (
    <section>
      <h2 className='mt-25 mb-10 max-w-[579px] text-[34px] leading-[45px] font-semibold text-white'>
        Related Articles
      </h2>

      <div className='grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3'>
        {posts.slice(0, 3).map((blog, i) => (
          <SingleBlog key={blog._id || i} blog={blog} />
        ))}
      </div>
    </section>
  );
}
