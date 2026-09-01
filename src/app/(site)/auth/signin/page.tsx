import Breadcrumb from '@/components/Breadcrumb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign in | AI Tool - Next.js Template for AI Tools',
  description: 'This is Sign in page for AI Tool',
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageTitle='Sign in' />

      <p className='mx-auto max-w-[1170px] px-4 py-20 text-center text-white/70'>
        Authentication is disabled in this demo deployment.
      </p>
    </>
  );
};

export default SigninPage;
