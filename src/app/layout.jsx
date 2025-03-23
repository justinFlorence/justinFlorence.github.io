import './globals.css';

export const metadata = {
  title: 'Justin Florence - Portfolio',
  description: 'Math & CS Major | Amazon SDE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 transition-colors">
        {children}
      </body>
    </html>
  );
}
