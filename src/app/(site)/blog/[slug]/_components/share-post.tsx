'use client';

import { FacebookIcon, LinkedinIcon, TwitterIcon } from '@/assets/icons';
import { useEffect, useState } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

type SharePostProps = {
  title?: string;
  description?: string;
};

export function SharePost({ title, description }: SharePostProps) {
  const [postUrl, setPostUrl] = useState('');

  useEffect(() => {
    setPostUrl(window.location.href);
  }, []);

  return (
    <div className='flex items-center gap-4'>
      <p className='font-medium'>Share This Post:</p>

      <div className='flex items-center gap-5'>
        <FacebookShareButton
          url={postUrl}
          hashtag='#blog'
          className='duration-300 ease-in hover:text-white'
        >
          <span className='sr-only'>Share this post on Facebook</span>
          <FacebookIcon />
        </FacebookShareButton>

        <TwitterShareButton
          url={postUrl}
          title={title}
          hashtags={['blog', 'article']}
          className='duration-300 ease-in hover:text-white'
        >
          <span className='sr-only'>Share this post on Twitter/X</span>
          <TwitterIcon />
        </TwitterShareButton>

        <LinkedinShareButton
          url={postUrl}
          title={title}
          summary={description}
          source={postUrl}
          className='duration-300 ease-in hover:text-white'
        >
          <span className='sr-only'>Share this post on LinkedIn</span>
          <LinkedinIcon />
        </LinkedinShareButton>
      </div>
    </div>
  );
}
