import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    id: 1,
    title: "ออกแบบบ้าน",
    icon: "🏗️",
    description: "ออกแบบบ้านตามความต้องการของคุณ ด้วยแนวคิดสร้างสรรค์และความเป็นไปได้ทางเทคนิค",
    details: [
      "ปรึกษาเกี่ยวกับแนวคิดและงบประมาณ",
      "ออกแบบ 2D และ 3D ตามความต้องการ",
      "ปรับปรุงและแก้ไขตามคำแนะนำของลูกค้า",
      "จัดเตรียมเอกสารการก่อสร้าง",
      "ติดตามการก่อสร้างจนเสร็จสิ้น"
    ]
  },
  {
    id: 2,
    title: "สร้างบ้านใหม่",
    icon: "🏢",
    description: "บริการสร้างบ้านจากศูนย์ด้วยคุณภาพและความเป็นมืออาชีพสูงสุด",
    details: [
      "เลือกพื้นที่และวางแผนโครงการ",
      "จัดหาวัสดุและแรงงานที่มีคุณภาพ",
      "ควบคุมคุณภาพการก่อสร้าง",
      "ตรวจสอบตามมาตรฐานการก่อสร้าง",
      "ส่งมอบบ้านที่สำเร็จ"
    ]
  },
  {
    id: 3,
    title: "บ้านเดี่ยว",
    icon: "🏠",
    description: "เชี่ยวชาญในการออกแบบและสร้างบ้านเดี่ยวที่สวยงาม ปลอดภัย และเหมาะสมกับพื้นที่",
    details: [
      "ออกแบบบ้านเดี่ยวแบบต่างๆ",
      "บ้านขนาดเล็ก ปานกลาง และขนาดใหญ่",
      "ตกแต่งภายในและภายนอก",
      "ระบบสาธารณูปโภค",
      "ภูมิทัศน์และการจัดสวน"
    ]
  },
  {
    id: 4,
    title: "ต่อเติมบ้าน",
    icon: "🔨",
    description: "บริการต่อเติมบ้านเพื่อเพิ่มพื้นที่และความสะดวกสบาย",
    details: [
      "ต่อเติมห้องนอน ห้องครัว ห้องน้ำ",
      "เพิ่มพื้นที่นั่งเล่น",
      "ปรับปรุงระบบสาธารณูปโภค",
      "ตกแต่งใหม่",
      "ปรึกษาเกี่ยวกับความเป็นไปได้ทางโครงสร้าง"
    ]
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            บริการของเรา - <strong>PG Home เว็บตรง 100%</strong>
          </h1>
          <p className="text-xl text-gray-300">
            บริการออกแบบและสร้างบ้านที่ครบครันและมีคุณภาพ - <strong>PG Home ลิขสิทธิ์แท้ 100%</strong>
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle className="text-amber-500 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-bold transition-colors inline-flex items-center gap-2">
                    ติดต่อเรา <ArrowRight size={20} />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                  <div className="w-full h-80 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                    <div className="text-8xl opacity-50">{service.icon}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              กระบวนการทำงานของเรา
            </h2>
            <p className="text-xl text-gray-600">
              ขั้นตอนการออกแบบและสร้างบ้านที่มีระบบและเป็นมืออาชีพ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "ปรึกษา", description: "ฟังความต้องการและงบประมาณของลูกค้า" },
              { step: "2", title: "ออกแบบ", description: "ออกแบบ 2D และ 3D ตามความต้องการ" },
              { step: "3", title: "อนุมัติ", description: "ปรับปรุงตามคำแนะนำและอนุมัติ" },
              { step: "4", title: "ก่อสร้าง", description: "ก่อสร้างตามแบบและมาตรฐาน" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ติดต่อเราวันนี้ - <strong>PG Home โปรโมชั่นแรงๆ</strong>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            ติดต่อเราวันนี้เพื่อปรึกษาเกี่ยวกับบริการของเรา - เว็บตรง 100%
          </p>
          <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2">
            ติดต่อเรา <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
