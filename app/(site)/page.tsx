'use client'
import { profile } from '@/content/site'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Bento from '@/components/Bento'
import Link from 'next/link'
export default function HomePage(){ return (<div className='space-y-10'>
  <section className='relative overflow-hidden card p-8'>
    <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className='text-4xl md:text-5xl font-extrabold leading-tight'>
      <span className='bg-gradient-to-tr from-brand-500 to-fuchsia-500 bg-clip-text text-transparent'>Hi, I’m {profile.name}.</span><br/>{profile.role}
    </motion.h1>
    <p className='mt-3 text-lg text-gray-700 dark:text-gray-300 max-w-2xl'>{profile.headline}</p>
    <div className='mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-700 dark:text-gray-300'>
      <span className='inline-flex items-center gap-1'><MapPin className='w-4 h-4'/>{profile.location}</span>
      <a className='inline-flex items-center gap-1 link' href={`mailto:${profile.email}`}><Mail className='w-4 h-4'/>{profile.email}</a>
    </div>
    <div className='mt-6 flex gap-3'><Link href='/work' className='btn btn-primary'>See my work <ArrowRight className='w-4 h-4'/></Link><Link href='/contact' className='btn'>Contact</Link></div>
    <div className='absolute -inset-10 -z-10 opacity-40 blur-3xl pointer-events-none' aria-hidden='true'><div className='h-full w-full bg-gradient-to-tr from-fuchsia-300 via-rose-200 to-amber-200 dark:from-fuchsia-900 dark:via-purple-900 dark:to-amber-900 rounded-[100%]'/></div>
  </section>
  <Bento/>
  <section className='card p-6'>
    <h2 className='text-xl font-semibold'>Recent Work</h2>
    <p className='text-sm text-gray-600 dark:text-gray-400'>A selection of recent projects.</p>
    <div className='mt-4 grid md:grid-cols-3 gap-4'>{profile.projects.slice(0,3).map(p=>(<a key={p.title} href='/work' className='block p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:translate-y-[-3px] transition'><div className='font-medium'>{p.title}</div><div className='text-xs text-gray-600 dark:text-gray-400 mt-1'>{p.tags.join(' • ')}</div></a>))}</div>
  </section>
</div>) }
