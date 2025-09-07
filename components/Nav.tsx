'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { cn } from '@/lib/utils'
const links=[{href:'/',label:'Home'},{href:'/work',label:'Work'},{href:'/about',label:'About'},{href:'/contact',label:'Contact'}]
export default function Nav(){ const pathname=usePathname(); return (<header className='sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-black/30 border-b border-black/5 dark:border-white/10'><div className='container py-3 flex items-center justify-between'><Link href='/' className='font-bold text-lg'>Portfolio</Link><nav className='hidden md:flex items-center gap-2'>{links.map(l=>(<Link key={l.href} href={l.href} className={cn('px-3 py-2 rounded-xl border transition', pathname===l.href?'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white':'bg-white/70 dark:bg-white/5 border-black/10 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10')}>{l.label}</Link>))}</nav><div className='flex items-center gap-2'><ThemeToggle/><a href='/resume.pdf' className='btn btn-primary hidden sm:inline'>Resume</a></div></div></header>) }
