import Breadcrumb from '@/components/Breadcrumb';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password | AI Tool - Next.js Template for AI Tools',
  description: 'This is Forgot Password page for AI Tool',
  // other metadata
};

const ForgotPasswordPage = () => {
  return (
    <>
      <Breadcrumb pageTitle='Forgot Password' />
      <p className='mx-auto max-w-[1170px] px-4 py-20 text-center text-white/70'>
        Authentication is disabled in this demo deployment.
      </p>
    </>
  );
};

export default ForgotPasswordPage;
