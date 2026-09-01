import '../../styles/tailwind.css';

export const metadata = {
  title: 'My Awesome Site',
  description: 'Demo deployment without CMS integrations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
