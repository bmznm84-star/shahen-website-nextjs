
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-brand-dark text-white">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="شاحن" width={140} height={32} priority/>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/#features" className="hover:opacity-80">الخدمات</Link>
          <Link href="/providers" className="hover:opacity-80">مزودو الخدمة</Link>
          <Link href="/#pricing" className="hover:opacity-80">الأسعار</Link>
          <Link href="/#contact" className="hover:opacity-80">تواصل</Link>
          <Link href="/login" className="btn btn-outline">تسجيل الدخول</Link>
          <Link href="/signup/company" className="btn btn-primary">إنشاء حساب</Link>
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-lg border border-white/20">
          <span className="sr-only">قائمة</span>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container py-3 flex flex-col gap-3 text-sm">
            <Link href="/#features" onClick={()=>setOpen(false)}>الخدمات</Link>
            <Link href="/providers" onClick={()=>setOpen(false)}>مزودو الخدمة</Link>
            <Link href="/#pricing" onClick={()=>setOpen(false)}>الأسعار</Link>
            <Link href="/#contact" onClick={()=>setOpen(false)}>تواصل</Link>
            <Link href="/login" onClick={()=>setOpen(false)} className="btn btn-outline w-full">تسجيل الدخول</Link>
            <Link href="/signup/company" onClick={()=>setOpen(false)} className="btn btn-primary w-full">إنشاء حساب</Link>
          </div>
        </div>
      )}
    </header>
  );
}
