import '@/styles/globals.scss';
import Navbar from '@/app/components/Navbar/Navbar';
import AuthContext from './context/AuthContext';
import 'react-datepicker/dist/react-datepicker.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main className='bg-gray-100 min-h-screen w-screen'>
          <AuthContext>
            <main className='max-w-screen-2xl m-auto bg-white'>
              <Navbar />
              {children}
            </main>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}
