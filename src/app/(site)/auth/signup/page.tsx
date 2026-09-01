import Breadcrumb from '@/components/Breadcrumb';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sing up | AI Tool - Next.js Template for AI Tools',
  description: 'This is Sign up for AI Tool',
  // other metadata
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageTitle='Sign up' />

      <p className='mx-auto max-w-[1170px] px-4 py-20 text-center text-white/70'>
        Authentication is disabled in this demo deployment.
      </p>
    </>
  );
};

export default SignupPage;
