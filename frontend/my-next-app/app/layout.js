import "../styles/globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "A simple Next.js + Go full-stack example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
