import "./globals.css";

export const metadata = {
  title: "Dave Brian Quinzon | Real Estate and E-commerce Virtual Assistant",
  description:
    "Portfolio of Dave Brian Quinzon, a work-from-home virtual assistant specializing in real estate and e-commerce, with automation builds in GoHighLevel and n8n.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
