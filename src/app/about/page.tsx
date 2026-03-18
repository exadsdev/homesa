import Link from "next/link";
import { Award, Users, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONFIG } from "@/lib/config";

const TEAM_IMAGE = CONFIG.imageTeam;

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "นายสมชาย ศิริวัฒน์",
    position: "ผู้บริหารและสถาปนิก",
    experience: "15 ปี",
    description: "ผู้บริหารบริษัท มีประสบการณ์ในการออกแบบและก่อสร้างบ้านมากกว่า 15 ปี",
  },
  {
    id: 2,
    name: "นางสาววิชิตา ภูมิสุข",
    position: "นักออกแบบภายใน",
    experience: "10 ปี",
    description: "เชี่ยวชาญในการออกแบบภายในบ้านและการเลือกวัสดุที่เหมาะสม",
  },
  {
    id: 3,
    name: "นายวิทยา ก่อสร้าง",
    position: "วิศวกรโยธา",
    experience: "12 ปี",
    description: "รับผิดชอบการออกแบบโครงสร้างและการก่อสร้างตามมาตรฐาน",
  },
];

const STATS = [
  { label: "โครงการเสร็จสิ้น", value: "150+" },
  { label: "ลูกค้าพึงพอใจ", value: "98%" },
  { label: "ประสบการณ์", value: "15 ปี" },
  { label: "ทีมงาน", value: "25+" },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            เกี่ยวกับ <strong>PG Home</strong> - เว็บตรง 100%
          </h1>
          <p className="text-xl text-gray-300">
            บริษัทออกแบบและสร้างบ้านที่มีคุณภาพและความเป็นมืออาชีพ
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                เรามาจากไหน
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                pg Home ก่อตั้งขึ้นเมื่อ 15 ปีที่แล้ว ด้วยวิสัยทัศน์ที่จะให้บริการออกแบบและสร้างบ้านที่มีคุณภาพสูง ราคาสมเหตุสมผล และมีความเป็นมืออาชีพ
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                ตั้งแต่เริ่มต้น เราได้ทำงานกับลูกค้าหลากหลายประเภท ตั้งแต่บ้านเดี่ยว บ้านแฝด บ้านแถว ไปจนถึงโครงการพัฒนาอสังหาริมทรัพย์ขนาดใหญ่
              </p>
              <p className="text-gray-700 leading-relaxed">
                ความสำเร็จของเราคือความพึงพอใจของลูกค้า และเรายังคงมุ่งมั่นที่จะให้บริการที่ดีที่สุดในทุกโครงการ
              </p>
            </div>
            <div>
              <img
                src={TEAM_IMAGE}
                alt="Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <Award className="text-amber-500 mb-4" size={40} />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ภารกิจของเรา
              </h2>
            <p className="text-gray-700">
              ให้บริการออกแบบและสร้างบ้านที่มีคุณภาพสูง ราคาสมเหตุสมผล และตรงตามความต้องการของลูกค้า - <strong>PG Home ลิขสิทธิ์แท้ 100%</strong>
            </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Briefcase className="text-amber-500 mb-4" size={40} />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                วิสัยทัศน์ของเรา
              </h2>
            <p className="text-gray-700">
              เป็นบริษัทออกแบบและสร้างบ้านที่เชื่อถือได้ และเป็นที่ยอมรับของลูกค้าในประเทศไทย - <strong>PG Home โปรโมชั่นแรงๆ</strong>
            </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Users className="text-amber-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ค่านิยมของเรา
              </h3>
              <p className="text-gray-700">
                ความสำคัญ ความซื่อสัตย์ ความเป็นมืออาชีพ และการให้บริการที่ดีที่สุด
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ทีมงานของเรา
            </h2>
            <p className="text-xl text-gray-600">
              ทีมงานมืออาชีพที่มีประสบการณ์และความรู้ความสามารถสูง
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg mb-4 flex items-center justify-center">
                  <Users size={60} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-gray-600 mb-3">ประสบการณ์: {member.experience}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ต้องการทราบข้อมูลเพิ่มเติม
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            ติดต่อเราเพื่อปรึกษาเกี่ยวกับโครงการของคุณ
          </p>
          <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors inline-block">
            ติดต่อเรา
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
