
export default function Page(){
  return (
    <div className="max-w-md mx-auto card p-6 space-y-4">
      <h1 className="text-xl font-bold">تسجيل الدخول</h1>
      <input className="border rounded-xl px-4 py-3 w-full" placeholder="رقم الجوال"/>
      <input className="border rounded-xl px-4 py-3 w-full" placeholder="كلمة المرور" type="password"/>
      <button className="btn btn-primary w-full">دخول</button>
      <p className="text-sm text-center text-gray-600">لا تملك حساب؟ <a href="/signup/company" className="text-brand">إنشاء حساب</a></p>
    </div>
  );
}
