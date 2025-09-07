'use client'
import { useEffect } from 'react'
export default function Spotlight(){ useEffect(()=>{ const handler=(e:MouseEvent)=>{ const root=document.documentElement; root.style.setProperty('--x', e.clientX+'px'); root.style.setProperty('--y', e.clientY+'px'); }; window.addEventListener('mousemove',handler); return ()=>window.removeEventListener('mousemove',handler) },[]); return <div className='pointer-events-none fixed inset-0 bg-spotlight'/> }
