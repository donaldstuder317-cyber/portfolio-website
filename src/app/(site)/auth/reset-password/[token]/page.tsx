import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Reset Password | AI Tool - Next.js Template for AI Tools',
  description: 'This is Reset Password page for AI Tool',
  // other metadata
};

const ResetPasswordPage = () => {
  return (
    <>
      <Breadcrumb pageTitle='Reset Password' />
      <p className='mx-auto max-w-[1170px] px-4 py-20 text-center text-white/70'>
        Authentication is disabled in this demo deployment.
      </p>
    </>
  );
};

export default ResetPasswordPage;
