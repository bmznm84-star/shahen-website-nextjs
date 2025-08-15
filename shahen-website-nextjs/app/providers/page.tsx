
type Provider = {name:string, city:string, rating:number, jobs:number};
const data: Provider[] = [
  {name:"مؤسسة طريق الخليج", city:"الرياض", rating:4.7, jobs:120},
  {name:"شركة السهول للنقل", city:"جدة", rating:4.5, jobs:96},
  {name:"الواحة للشحن", city:"الدمام", rating:4.3, jobs:74},
];

export default function Page(){
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">مزودو الخدمة</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((p,i)=>(
          <div key={i} className="card p-5">
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-gray-600">{p.city}</div>
            <div className="text-sm mt-2">التقييم: {p.rating} ★</div>
            <div className="text-sm">الطلبات المنفذة: {p.jobs}</div>
            <a href="/login" className="btn btn-outline mt-4 w-full">اطلب عرض سعر</a>
          </div>
        ))}
      </div>
    </div>
  );
}
