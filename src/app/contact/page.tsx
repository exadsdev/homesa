"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONFIG } from "@/lib/config";

const BUSINESS_INFO = {
  phone: CONFIG.businessPhone,
  email: CONFIG.businessEmail,
  address: CONFIG.businessAddress,
  hours: CONFIG.businessHours,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("ขอบคุณที่ติดต่อเรา เราจะติดต่อกลับในเร็วๆ นี้");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            ติดต่อ <strong>PG Home</strong> - เว็บตรง 100%
          </h1>
          <p className="text-xl text-gray-300">
            เรายิ่มต้องการทั้งหมด - <strong>PG Home ลิขสิทธิ์แท้ 100%</strong> และ <strong>PG Home โปรโมชั่นแรงๆ</strong> รอคุณ
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <Phone className="text-amber-500 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">โทรศัพท์</h3>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-700 hover:text-amber-500">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="text-center">
              <Mail className="text-amber-500 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">อีเมล</h3>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-700 hover:text-amber-500">
                {BUSINESS_INFO.email}
              </a>
            </div>

            <div className="text-center">
              <MapPin className="text-amber-500 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">ที่อยู่</h3>
              <p className="text-gray-700 text-sm">{BUSINESS_INFO.address}</p>
            </div>

            <div className="text-center">
              <Clock className="text-amber-500 mx-auto mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">เวลาทำการ</h3>
              <p className="text-gray-700 text-sm">{BUSINESS_INFO.hours}</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">ส่งข้อความถึง <strong>PG Home</strong></h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">ชื่อ</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="ชื่อของคุณ"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">อีเมล</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="อีเมลของคุณ"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">เบอร์โทรศัพท์</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    placeholder="เบอร์โทรศัพท์"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">หัวข้อ</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                  >
                    <option value="">เลือกหัวข้อ</option>
                    <option value="design">ออกแบบบ้าน</option>
                    <option value="construction">สร้างบ้านใหม่</option>
                    <option value="renovation">ต่อเติม/รีโนเวต</option>
                    <option value="other">อื่นๆ</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">ข้อความ</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                  placeholder="บอกเราเกี่ยวกับโครงการของคุณ"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-bold text-lg transition-colors"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
