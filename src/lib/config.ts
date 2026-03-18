// =============================================================================
// Central Configuration - อ่านค่าจาก .env file
// เปลี่ยนค่าที่ .env ได้เลย ไม่ต้องแก้โค้ด
// =============================================================================

export const CONFIG = {
  // --- Business Info ---
  businessName: process.env.NEXT_PUBLIC_BUSINESS_NAME || "pg Home",
  businessPhone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "02-XXX-XXXX",
  businessEmail: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "contact@pghome.co.th",
  businessAddress:
    process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ||
    "123 ถนนสุขุมวิท แขวงพระโขนง เขตคลองเตย กรุงเทพฯ 10110",
  businessHours:
    process.env.NEXT_PUBLIC_BUSINESS_HOURS ||
    "จันทร์ - ศุกร์: 09:00 - 18:00 | เสาร์: 10:00 - 16:00",

  // --- Social Media URLs ---
  socialFacebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "https://facebook.com/pghome",
  socialInstagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "https://instagram.com/pghome",
  socialLine: process.env.NEXT_PUBLIC_SOCIAL_LINE || "https://line.me/R/ti/p/@pghome",

  // --- CDN / Image URLs ---
  imageHero:
    process.env.NEXT_PUBLIC_IMAGE_HERO ||
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663437229631/5FkRT3UPQJbAYAKeT4i5Lo/hero-modern-house-bjT4uUE2hZRMTdW9EpcicF.webp",
  imageConstruction:
    process.env.NEXT_PUBLIC_IMAGE_CONSTRUCTION ||
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663437229631/5FkRT3UPQJbAYAKeT4i5Lo/construction-process-3dUsRzbWMNPY6XdmuvyBCk.webp",
  imageInterior:
    process.env.NEXT_PUBLIC_IMAGE_INTERIOR ||
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663437229631/5FkRT3UPQJbAYAKeT4i5Lo/interior-design-Gtn8Ai6zMPWnzqJJpFcfne.webp",
  imageTeam:
    process.env.NEXT_PUBLIC_IMAGE_TEAM ||
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663437229631/5FkRT3UPQJbAYAKeT4i5Lo/team-consultation-dG5fXWpwinKQvbXmDTfMvp.webp",
  imageRenovation:
    process.env.NEXT_PUBLIC_IMAGE_RENOVATION ||
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663437229631/5FkRT3UPQJbAYAKeT4i5Lo/renovation-before-after-cmBJATWzq66hb7PjSiGrXi.webp",
} as const;
