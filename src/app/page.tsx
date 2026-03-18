import Link from "next/link";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONFIG } from "@/lib/config";

const HERO_IMAGE = CONFIG.imageHero;
const CONSTRUCTION_IMAGE = CONFIG.imageConstruction;
const INTERIOR_IMAGE = CONFIG.imageInterior;

const SERVICES = [
  {
    id: 1,
    title: "ออกแบบบ้าน",
    description: "ออกแบบบ้านตามความต้องการของคุณ ด้วยแนวคิดสร้างสรรค์และความเป็นไปได้ทางเทคนิค",
    icon: "🏗️",
  },
  {
    id: 2,
    title: "สร้างบ้านใหม่",
    description: "บริการสร้างบ้านจากศูนย์ด้วยคุณภาพและความเป็นมืออาชีพสูงสุด",
    icon: "🏢",
  },
  {
    id: 3,
    title: "บ้านเดี่ยว",
    description: "เชี่ยวชาญในการออกแบบและสร้างบ้านเดี่ยวที่สวยงาม ปลอดภัย และเหมาะสมกับพื้นที่",
    icon: "🏠",
  },
  {
    id: 4,
    title: "ต่อเติมบ้าน",
    description: "บริการต่อเติมบ้านเพื่อเพิ่มพื้นที่และความสะดวกสบาย",
    icon: "🔨",
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "นายสมศักดิ์ จันทร์สว่าง",
    text: "บริษัท pg Home ให้บริการที่ดีมาก ทีมงานมีความเป็นมืออาชีพ ผลงานออกมาตรงตามที่ต้องการและสวยงามมาก",
    rating: 5,
  },
  {
    id: 2,
    name: "นางสาวพิชญา สุขใจ",
    text: "ต่อเติมบ้านกับ pg Home ผลงานดีมาก ทีมงานช่วยให้คำปรึกษาและแนะนำเรื่องการเลือกวัสดุได้ดี",
    rating: 5,
  },
  {
    id: 3,
    name: "นายกิตติศักดิ์ ทองสวัสดิ์",
    text: "ออกแบบบ้านใหม่กับ pg Home ได้บ้านที่สวยงามและปลอดภัย ราคาก็สมควรกับคุณภาพ",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Modern House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              ออกแบบบ้าน สร้างบ้านของคุณ
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              <strong>PG Home เว็บตรง 100%</strong> - บริการออกแบบและสร้างบ้านที่มีคุณภาพและความเป็นมืออาชีพ ด้วยประสบการณ์กว่า 15 ปี
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2">
                ติดต่อเรา <ArrowRight size={20} />
              </Link>
              <Link href="/portfolio" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-bold text-lg transition-colors inline-block">
                ดูผลงาน
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              บริการของเรา
            </h2>
            <p className="text-xl text-gray-600">
              เรามีบริการครบครันสำหรับทุกความต้องการของคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ทำไมต้องเลือก pg Home
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900">ประสบการณ์กว่า 15 ปี</h3>
                    <p className="text-gray-600">ทีมงานมีประสบการณ์มากมายในการออกแบบและสร้างบ้าน</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900">คุณภาพสูง</h3>
                    <p className="text-gray-600">ใช้วัสดุและเทคนิคการก่อสร้างที่ดีที่สุด</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900">ราคาสมเหตุสมผล</h3>
                    <p className="text-gray-600">ราคาที่เป็นธรรมและสมควรกับคุณภาพ</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900">บริการหลังการขาย</h3>
                    <p className="text-gray-600">ให้บริการหลังการขายและการดูแลรักษา</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img
                src={CONSTRUCTION_IMAGE}
                alt="Construction Process"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ผลงานของเรา
            </h2>
            <p className="text-xl text-gray-600">
              ดูผลงานที่เราได้ทำมาให้ลูกค้าต่างๆ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <img
              src={HERO_IMAGE}
              alt="Modern House"
              className="rounded-lg shadow-lg h-80 object-cover"
            />
            <img
              src={INTERIOR_IMAGE}
              alt="Interior Design"
              className="rounded-lg shadow-lg h-80 object-cover"
            />
          </div>

          <div className="text-center">
            <Link href="/portfolio" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2">
              ดูผลงานทั้งหมด <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ความพึงพอใจของลูกค้า
            </h2>
            <p className="text-xl text-gray-600">
              ความคิดเห็นจากลูกค้าที่มีความสุขกับการใช้บริการของเรา - <strong>PG Home ลิขสิทธิ์แท้ 100%</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={20} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&quot;{testimonial.text}&quot;</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            พร้อมสร้างบ้านของคุณแล้วหรือ
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            ติดต่อเราวันนี้เพื่อปรึกษาเกี่ยวกับโครงการของคุณ - <strong>PG Home โปรโมชั่นแรงๆ</strong> รอคุณอยู่
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
