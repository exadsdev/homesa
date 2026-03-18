import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONFIG } from "@/lib/config";

export default function Refund() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            นโยบายการคืนเงิน
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. นโยบายการคืนเงินทั่วไป</h2>
              <p className="text-gray-700">
                pg Home มีนโยบายการคืนเงินที่ยุติธรรมและชัดเจนสำหรับลูกค้าทั้งหมด
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. เงื่อนไขการคืนเงิน</h2>
              <p className="text-gray-700">
                การคืนเงินจะพิจารณาตามสถานการณ์ต่อไปนี้:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>หากลูกค้ายกเลิกสัญญาก่อนเริ่มการก่อสร้าง อาจได้รับคืนเงินส่วนใหญ่</li>
                <li>หากยกเลิกระหว่างการออกแบบ อาจมีค่าปรับตามที่ตกลงกัน</li>
                <li>หากยกเลิกระหว่างการก่อสร้าง จะคิดค่าใช้สอยตามความก้าวหน้า</li>
                <li>หากการก่อสร้างเสร็จสิ้น ไม่มีการคืนเงิน</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. ระยะเวลาการคืนเงิน</h2>
              <p className="text-gray-700">
                การคืนเงินจะดำเนินการภายใน 30 วันนับจากวันที่อนุมัติการคืนเงิน
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. ค่าใช้สอยที่ไม่สามารถคืนได้</h2>
              <p className="text-gray-700">
                ค่าใช้สอยต่อไปนี้ไม่สามารถคืนได้:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>ค่าออกแบบและปรึกษา</li>
                <li>ค่าวัสดุที่ซื้อแล้ว</li>
                <li>ค่าแรงงานที่ทำแล้ว</li>
                <li>ค่าใบอนุญาตและใบสำคัญ</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. วิธีการขอคืนเงิน</h2>
              <p className="text-gray-700">
                ลูกค้าต้องส่งคำขอคืนเงินเป็นลายลักษณ์อักษรพร้อมเหตุผลและเอกสารที่เกี่ยวข้อง
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. การพิจารณาคำขอ</h2>
              <p className="text-gray-700">
                pg Home จะพิจารณาคำขอคืนเงินและแจ้งผลการพิจารณาภายใน 14 วัน
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">7. การติดต่อ</h2>
              <p className="text-gray-700">
                สำหรับข้อมูลเพิ่มเติมเกี่ยวกับนโยบายการคืนเงิน โปรดติดต่อเราที่ {CONFIG.businessEmail} หรือ {CONFIG.businessPhone}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
