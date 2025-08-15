
export default function Footer(){
  return (
    <footer className="bg-brand-dark text-white mt-10">
      <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div className="opacity-90">
          <h4 className="font-semibold mb-3">عن شاحن</h4>
          <p>منصة رقمية لوجستية لإدارة وإصدار وثائق النقل وربط الشاحنين والناقلين مع الجهات الحكومية.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">روابط</h4>
          <ul className="space-y-2 opacity-90">
            <li><a href="/privacy">سياسة الخصوصية</a></li>
            <li><a href="/terms">الشروط والأحكام</a></li>
            <li><a href="/refund">سياسة الاسترداد</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">تواصل</h4>
          <p className="opacity-90">support@shahen.sa</p>
          <p className="opacity-90">+966-5-0000-0000</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">حمّل التطبيق</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="App Store"><img src="/store-apple.svg" alt="App Store" width="135" height="40"/></a>
            <a href="#" aria-label="Google Play"><img src="/store-google.svg" alt="Google Play" width="150" height="40"/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-4 text-xs opacity-70">© {new Date().getFullYear()} شاحن. جميع الحقوق محفوظة.</div>
      </div>
    </footer>
  );
}
