export const metadata = {
  title: 'Next.js',
  description: 'Genetated by Next.js!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}