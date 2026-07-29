import 'normalize.css/normalize.css';
import GlobalStyles from '~/components/GlobalStyles';

export const metadata = {
  title: 'TikTok - Make Your Day',
  description: 'TikTok Web Application built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles>
          {children}
        </GlobalStyles>
      </body>
    </html>
  );
}
