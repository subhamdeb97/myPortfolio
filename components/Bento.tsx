import { profile } from '@/content/site'
import { Rocket, Award, Zap, Cpu } from 'lucide-react'
export default function Bento(){ return (<section className='grid md:grid-cols-3 gap-4'>
  <div className='card p-6 md:col-span-2'><h3 className='text-lg font-semibold flex items-center gap-2'><Rocket className='w-4 h-4'/> Highlights</h3><ul className='mt-3 grid md:grid-cols-3 gap-2 text-sm text-gray-700 dark:text-gray-300'>{profile.highlights.map((h,i)=>(<li key={i} className='badge'>{h}</li>))}</ul></div>
  <div className='card p-6'><h3 className='text-lg font-semibold flex items-center gap-2'><Cpu className='w-4 h-4'/> Stack</h3><div className='mt-3 flex flex-wrap gap-2'>{profile.skills.map(s=>(<span key={s} className='badge'>{s}</span>))}</div></div>
  <div className='card p-6'><h3 className='text-lg font-semibold flex items-center gap-2'><Zap className='w-4 h-4'/> Currently</h3><p className='mt-2 text-sm text-gray-700 dark:text-gray-300'>Open to senior/front-end roles & selective freelance.</p></div>
  <div className='card p-6 md:col-span-2'><h3 className='text-lg font-semibold flex items-center gap-2'><Award className='w-4 h-4'/> Testimonials</h3><div className='mt-3 grid md:grid-cols-2 gap-3 text-sm'>{profile.testimonials.map(t=>(<blockquote key={t.name} className='p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10'><p>“{t.quote}”</p><div className='mt-2 text-xs text-gray-600 dark:text-gray-400'>— {t.name}, {t.role}</div></blockquote>))}</div></div>
</section>) }
