"use client";
import type { Blog } from '@/types/blog';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import SingleBlog from './SingleBlog';

const BlogGridContainer = ({ blogs }: { blogs: Blog[] }) => {
  const itemToLoad = 5;

  const [hasMore, setHasMore] = useState(true);
  const [showBlogs, setShowBlogs] = useState(blogs?.slice(0, itemToLoad));

  const fetchMoreData = () => {
    setTimeout(() => {
      setShowBlogs(blogs.slice(0, showBlogs.length + itemToLoad));
    }, 1500);
  };

  useEffect(() => {
    if (
      showBlogs?.length > blogs?.length ||
      showBlogs?.length === blogs?.length
    ) {
      setHasMore(false);
    }
    if (showBlogs?.length < blogs?.length) {
      setHasMore(true);
    }
  }, [showBlogs?.length, blogs?.length]);

  return (
    <div className='mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0'>
      <InfiniteScroll
        dataLength={showBlogs.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className='col-span-full flex w-full items-center justify-center px-4 text-white'>
            Loading...
          </div>
        }
        className='grid grid-cols-1 gap-x-7.5 gap-y-12.5 sm:grid-cols-2 lg:grid-cols-3'
      >
        {showBlogs?.map((blog, i) => <SingleBlog key={blog._id || i} blog={blog} />)}
      </InfiniteScroll>
    </div>
  );
};

export default BlogGridContainer;
