import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONFIG } from "@/lib/config";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            นโยบายความเป็นส่วนตัว
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. การเก็บรวบรวมข้อมูล</h2>
              <p className="text-gray-700">
                pg Home เก็บรวบรวมข้อมูลส่วนบุคคลเช่น ชื่อ อีเมล เบอร์โทรศัพท์ ที่อยู่ เพื่อให้บริการและติดต่อกับลูกค้า
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. การใช้ข้อมูล</h2>
              <p className="text-gray-700">
                ข้อมูลที่เก็บรวบรวมจะใช้เพื่อ:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>ให้บริการออกแบบและสร้างบ้าน</li>
                <li>ติดต่อและสื่อสารกับลูกค้า</li>
                <li>ส่งข้อมูลข่าวสารและโปรโมชั่น (หากลูกค้าตกลง)</li>
                <li>ปรับปรุงบริการและประสบการณ์ของลูกค้า</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. การคุ้มครองข้อมูล</h2>
              <p className="text-gray-700">
                pg Home ใช้มาตรการความปลอดภัยที่เหมาะสมเพื่อคุ้มครองข้อมูลส่วนบุคคลของลูกค้า
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. การแบ่งปันข้อมูล</h2>
              <p className="text-gray-700">
                pg Home จะไม่แบ่งปันข้อมูลส่วนบุคคลของลูกค้าให้กับบุคคลที่สามโดยไม่ได้รับอนุญาต ยกเว้นเมื่อจำเป็นเพื่อให้บริการ
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. สิทธิของลูกค้า</h2>
              <p className="text-gray-700">
                ลูกค้ามีสิทธิที่จะ:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>เข้าถึงข้อมูลส่วนบุคคลของตนเอง</li>
                <li>ขอให้แก้ไขข้อมูลที่ไม่ถูกต้อง</li>
                <li>ขอให้ลบข้อมูล</li>
                <li>ปฏิเสธการรับข้อมูลข่าวสารและโปรโมชั่น</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. การติดต่อ</h2>
              <p className="text-gray-700">
                หากมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัว โปรดติดต่อเราที่ {CONFIG.businessEmail}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
