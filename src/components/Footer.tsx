import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { CONFIG } from "@/lib/config";

const BUSINESS_INFO = {
  name: CONFIG.businessName,
  email: CONFIG.businessEmail,
  phone: CONFIG.businessPhone,
  address: CONFIG.businessAddress,
};

const FOOTER_LINKS = {
  company: [
    { label: "เกี่ยวกับเรา", href: "/about" },
    { label: "บริการ", href: "/services" },
    { label: "ผลงาน", href: "/portfolio" },
  ],
  policies: [
    { label: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
    { label: "เงื่อนไขการใช้บริการ", href: "/terms" },
    { label: "นโยบายการคืนเงิน", href: "/refund" },
  ],
  contact: [
    { label: "ติดต่อเรา", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt={BUSINESS_INFO.name} className="w-10 h-10 rounded-lg object-contain" />
              <h3 className="text-xl font-bold">{BUSINESS_INFO.name}</h3>
            </div>
            <p className="text-gray-400 text-sm">
              บริการออกแบบและสร้างบ้านที่มีคุณภาพและความเป็นมืออาชีพ
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">บริษัท</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-amber-500 transition-colors">
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold mb-4">นโยบาย</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.policies.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-amber-500 transition-colors">
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">ติดต่อเรา</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-amber-500 transition-colors">
                  โทร: {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-amber-500 transition-colors">
                  อีเมล: {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="text-xs">{BUSINESS_INFO.address}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social */}
            <div className="flex gap-4">
              <a href={CONFIG.socialFacebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href={CONFIG.socialInstagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href={CONFIG.socialLine} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} {BUSINESS_INFO.name}. สงวนลิขสิทธิ์ทั้งหมด
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
