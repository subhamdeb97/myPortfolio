'use client'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
export default function ThemeToggle(){ const { resolvedTheme, setTheme } = useTheme(); const [mounted,setMounted]=useState(false); useEffect(()=>setMounted(true),[]); if(!mounted) return null; const isDark=resolvedTheme==='dark'; return (<button onClick={()=>setTheme(isDark?'light':'dark')} className='btn' aria-label='Toggle theme'>{isDark? <Sun className='w-4 h-4'/>: <Moon className='w-4 h-4'/>}<span className='hidden sm:inline'>{isDark?'Light':'Dark'}</span></button>) }
