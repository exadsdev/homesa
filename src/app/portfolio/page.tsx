"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONFIG } from "@/lib/config";

const PROJECTS = [
  {
    id: 1,
    title: "บ้านสมัยใหม่ที่สุขุมวิท",
    description: "บ้านเดี่ยวสมัยใหม่ 3 ชั้น พื้นที่ 200 ตร.ม. ตกแต่งด้วยวัสดุคุณภาพสูง",
    image: CONFIG.imageHero,
    category: "บ้านเดี่ยว",
    year: 2023,
    details: "บ้านสมัยใหม่ที่ออกแบบด้วยแนวคิดมินิมาล มีพื้นที่ใช้สอยอย่างมีประสิทธิภาพ ตกแต่งด้วยวัสดุเลือกสรรและสีสันที่ลงตัว"
  },
  {
    id: 2,
    title: "โครงการก่อสร้างบ้านเรือนไทย",
    description: "บ้านเรือนไทยแบบดั้งเดิม 2 ชั้น ผสมผสานความสวยงามของสถาปัตยกรรมไทย",
    image: CONFIG.imageConstruction,
    category: "บ้านใหม่",
    year: 2023,
    details: "บ้านเรือนไทยที่ออกแบบโดยคำนึงถึงความสวยงามของสถาปัตยกรรมไทยดั้งเดิม พร้อมระบบสาธารณูปโภคสมัยใหม่"
  },
  {
    id: 3,
    title: "ตกแต่งภายในบ้านหรูหรา",
    description: "ตกแต่งภายในบ้านหรูหรา ด้วยการออกแบบสมัยใหม่และวัสดุเลือกสรร",
    image: CONFIG.imageInterior,
    category: "ตกแต่งภายใน",
    year: 2024,
    details: "ตกแต่งภายในที่สะท้อนความหรูหรา ความสะดวกสบาย และความเป็นส่วนตัวของเจ้าของบ้าน"
  },
  {
    id: 4,
    title: "รีโนเวตบ้านเก่าเป็นบ้านสมัยใหม่",
    description: "ปรับปรุงบ้านเก่าให้เป็นบ้านสมัยใหม่ พร้อมระบบสาธารณูปโภคใหม่",
    image: CONFIG.imageRenovation,
    category: "ต่อเติม/รีโนเวต",
    year: 2024,
    details: "การปรับปรุงบ้านเก่าให้เป็นบ้านสมัยใหม่ที่มีความสะดวกสบาย ปลอดภัย และสวยงาม"
  },
];

const CATEGORIES = ["ทั้งหมด", "บ้านเดี่ยว", "บ้านใหม่", "ตกแต่งภายใน", "ต่อเติม/รีโนเวต"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = React.useState("ทั้งหมด");

  const filteredProjects = selectedCategory === "ทั้งหมด"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ผลงาน <strong>PG Home</strong> - ลิขสิทธิ์แท้ 100%
          </h1>
          <p className="text-xl text-gray-300">
            ดูผลงานที่เราได้ทำมาให้ลูกค้าต่างๆ - <strong>PG Home โปรโมชั่นแรงๆ</strong>
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-amber-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-semibold text-amber-300 mb-2">{project.category} • {project.year}</p>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-200">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <p className="text-gray-700 mb-4">{project.details}</p>
                  <Link href="/contact" className="text-amber-500 hover:text-amber-600 font-semibold inline-flex items-center gap-2">
                    ติดต่อเรา <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">ไม่พบผลงานในหมวดหมู่นี้</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ต้องการโครงการเหมือนี้ - <strong>PG Home เว็บตรง 100%</strong>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            ติดต่อเราเพื่อปรึกษาเกี่ยวกับโครงการของคุณ - <strong>PG Home ลิขสิทธิ์แท้ 100%</strong>
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
