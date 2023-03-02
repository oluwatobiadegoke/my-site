export const metadata = {
  title: "Oluwatobi's Blog",
  description: "Oluwatobi's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
