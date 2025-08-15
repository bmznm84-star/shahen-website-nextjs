
export default function Page(){
  return (
    <div className="max-w-md mx-auto card p-6 text-center space-y-3">
      <h1 className="text-2xl font-extrabold text-brand">تم التسجيل بنجاح</h1>
      <p className="text-gray-600">يمكنك الآن الدخول إلى حسابك والبدء في إدارة الشحنات.</p>
      <a href="/login" className="btn btn-primary">انتقال لتسجيل الدخول</a>
    </div>
  );
}
