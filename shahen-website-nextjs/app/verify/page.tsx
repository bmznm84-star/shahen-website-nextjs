
export default function Page(){
  return (
    <div className="max-w-md mx-auto card p-6 space-y-4">
      <h1 className="text-xl font-bold">التحقق</h1>
      <p className="text-gray-600 text-sm">أدخل رمز التحقق المرسل إلى جوالك.</p>
      <input className="border rounded-xl px-4 py-3 w-full text-center tracking-[0.5em]" placeholder="— — — —"/>
      <button className="btn btn-primary w-full">تأكيد</button>
    </div>
  );
}
