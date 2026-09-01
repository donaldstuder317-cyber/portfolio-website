const integrations = {
  isBlogEnabled: false,
  isPaymentsEnabled: false,
  isOpenAIEnabled: true,
  isMailchimpEnabled: true,
  isAuthEnabled: false,
};

const messages = {
  blog: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      This demo build has the blog disabled.
    </div>
  ),
  payment: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      This demo build has payments disabled.
    </div>
  ),
  opanAi: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      OpenAI is not enabled. Follow the{' '}
      <a
        href='https://nextjstemplates.com/docs/enableintegration'
        className='text-primary underline'
      >
        documentation
      </a>{' '}
      to enable it.
    </div>
  ),
  mailchimp: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Mailchimp is not enabled. Follow the {''}
      <a
        href='https://nextjstemplates.com/docs/enableintegration'
        className='text-primary underline'
      >
        documentation
      </a>{' '}
      to enable it.
    </div>
  ),
  auth: (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Auth is not enabled in this demo deployment.
    </div>
  ),
};

export { integrations, messages };
