// Only used for the home address "/", which sends visitors to the English site.
export const metadata = { title: "Woodbine Preparatory School" };

export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
