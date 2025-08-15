
export default function Page(){
  return (
    <form className="max-w-xl mx-auto card p-6 grid gap-4">
      <h1 className="text-xl font-bold mb-2">إنشاء حساب مزود خدمة — مؤسسة</h1>
      <input className="border rounded-xl px-4 py-3 w-full" placeholder="اسم المؤسسة"/>
      <input className="border rounded-xl px-4 py-3 w-full" placeholder="الرقم الضريبي (إن وجد)"/>
      <input className="border rounded-xl px-4 py-3 w-full" placeholder="البريد الإلكتروني"/>
      <input className="border rounded-xl px-4 py-3 w-full" placeholder="رقم الجوال"/>
      <button className="btn btn-primary w-full">متابعة</button>
    </form>
  );
}
