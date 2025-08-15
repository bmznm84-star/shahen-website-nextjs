
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
            إدارة شحناتك وإصدار وثائق النقل <span className="text-brand">بضغطة زر</span>
          </h1>
          <p className="text-gray-600 leading-8">
            منصة <b>شاحن</b> تربط الشاحنين والناقلين، وتتكامل مع الجهات الحكومية لإصدار وثائق النقل، التتبع، والمدفوعات.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/signup/company" className="btn btn-primary">ابدأ الآن</Link>
            <Link href="/login" className="btn btn-outline">تسجيل الدخول</Link>
          </div>
          <div className="flex gap-3 pt-2">
            <a href="#" aria-label="App Store"><img src="/store-apple.svg" alt="App Store" width={135} height={40}/></a>
            <a href="#" aria-label="Google Play"><img src="/store-google.svg" alt="Google Play" width={150} height={40}/></a>
          </div>
        </div>
        <div className="card p-4">
          <Image src="/logo.svg" alt="شاحن" width={600} height={300} className="w-full h-auto"/>
        </div>
      </section>

      <section id="features" className="space-y-8">
        <h2 className="text-2xl font-bold">مزايا المنصة</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title:"إصدار وثائق النقل",desc:"تكامل مع الجهات لإصدار البيان والوصولات بنقرة."},
            {title:"إدارة المزودين والعملاء",desc:"ملفات تعريف، صلاحيات، وإجراءات تحقق."},
            {title:"مدفوعات وفواتير",desc:"تحصيل إلكتروني، تسوية، وتقارير مالية."},
          ].map((f,i)=>(
            <div key={i} className="card p-6">
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="space-y-6">
        <h2 className="text-2xl font-bold">الأسعار</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title:"أساسي", price:"0 ر.س", items:["حساب شركة/مؤسسة","إصدار محدود","دعم عبر البريد"]},
            {title:"محترف", price:"99 ر.س / شهر", items:["إصدار غير محدود","تقارير متقدمة","دعم أولوية"]},
            {title:"مؤسسي", price:"حسب الاستخدام", items:["صلاحيات متعددة","تكاملات مخصصة","مدير حساب"]},
          ].map((p,i)=>(
            <div key={i} className="card p-6">
              <div className="text-lg font-semibold mb-3">{p.title}</div>
              <div className="text-3xl font-extrabold text-brand mb-4">{p.price}</div>
              <ul className="space-y-2 text-gray-700">
                {p.items.map((x,ix)=>(<li key={ix}>• {x}</li>))}
              </ul>
              <a href="/signup/company" className="btn btn-primary w-full mt-5">اشترك الآن</a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="space-y-6">
        <h2 className="text-2xl font-bold">تواصل معنا</h2>
        <form className="card p-6 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="border rounded-xl px-4 py-3" placeholder="الاسم"/>
            <input className="border rounded-xl px-4 py-3" placeholder="البريد الإلكتروني"/>
          </div>
          <textarea className="border rounded-xl px-4 py-3 min-h-[120px]" placeholder="رسالتك"></textarea>
          <button className="btn btn-primary w-fit">إرسال</button>
        </form>
      </section>
    </div>
  );
}
