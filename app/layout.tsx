
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "شاحن | منصة لوجستية",
  description: "منصة شاحن لإدارة وإصدار وثائق النقل وربط الشاحنين والناقلين.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-brand-light text-gray-900">
        <Header />
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
