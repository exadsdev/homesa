import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="flex-grow flex items-center justify-center py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-amber-500 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ไม่พบหน้าที่ต้องการ</h2>
          <p className="text-gray-600 mb-8">ขออภัย หน้าที่คุณกำลังค้นหาไม่สามารถพบได้</p>
          <Link
            href="/"
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            กลับหน้าแรก
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
