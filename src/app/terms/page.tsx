import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            เงื่อนไขการใช้บริการ
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2>1. เงื่อนไขทั่วไป</h2>
            <p>
              โดยการใช้บริการของ pg Home คุณตกลงที่จะปฏิบัติตามเงื่อนไขการใช้บริการทั้งหมด
            </p>

            <h2>2. ข้อมูลลูกค้า</h2>
            <p>
              ลูกค้าตกลงที่จะให้ข้อมูลที่ถูกต้องและสมบูรณ์ในการติดต่อและการทำสัญญา
            </p>

            <h2>3. การชำระเงิน</h2>
            <p>
              การชำระเงินจะทำตามที่ตกลงกันในสัญญา ซึ่งโดยทั่วไปจะแบ่งเป็นงวดตามความก้าวหน้าของโครงการ
            </p>

            <h2>4. ความรับผิดชอบ</h2>
            <p>
              pg Home จะรับผิดชอบในการออกแบบและสร้างบ้านตามแบบและข้อกำหนดที่ตกลงกัน
            </p>

            <h2>5. การยกเลิกสัญญา</h2>
            <p>
              การยกเลิกสัญญาจะต้องแจ้งเป็นลายลักษณ์อักษรและอาจมีค่าปรับตามที่ตกลงกัน
            </p>

            <h2>6. ข้อมูลส่วนบุคคล</h2>
            <p>
              pg Home จะเก็บรักษาข้อมูลส่วนบุคคลของลูกค้าตามนโยบายความเป็นส่วนตัว
            </p>

            <h2>7. การแก้ไขข้อพิพาท</h2>
            <p>
              ข้อพิพาทใดๆ จะถูกแก้ไขผ่านการเจรจาและหากจำเป็นจะอ้างอิงถึงกฎหมายไทย
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
