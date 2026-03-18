"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CONFIG } from "@/lib/config";

const NAVIGATION_LINKS = [
  { label: "หน้าแรก", href: "/" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "บริการ", href: "/services" },
  { label: "ผลงาน", href: "/portfolio" },
  { label: "ติดต่อเรา", href: "/contact" },
];

const BUSINESS_INFO = {
  name: CONFIG.businessName,
  phone: CONFIG.businessPhone,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt={BUSINESS_INFO.name} className="w-10 h-10 rounded-lg object-contain" />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">{BUSINESS_INFO.name}</h1>
                <p className="text-xs text-gray-600 leading-tight">ออกแบบบ้าน สร้างบ้าน</p>
              </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  {link.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              ติดต่อเรา
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-3">
              {NAVIGATION_LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-amber-600 font-medium py-2 transition-colors">
                    {link.label}
                </Link>
              ))}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="block bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
              >
                ติดต่อเรา
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
