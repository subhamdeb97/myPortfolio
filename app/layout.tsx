import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import { ThemeProvider } from '@/components/ThemeProvider'
import Spotlight from '@/components/Spotlight'
import { profile } from '@/content/site'
export const metadata: Metadata={ title: `${profile.name} — ${profile.role}`, description: profile.headline, metadataBase: new URL('https://example.com') }
export default function RootLayout({children}:{children:React.ReactNode}){ return (<html lang='en' suppressHydrationWarning><body><ThemeProvider><Spotlight/><Nav/><main className='container py-8'>{children}</main><footer className='mt-16 border-t border-black/5 dark:border-white/10'><div className='container py-6 text-sm text-gray-600 dark:text-gray-400 flex items-center justify-between'><div>© {new Date().getFullYear()} {profile.name}</div><div className='flex gap-4'>{profile.socials.map(s=>(<a key={s.label} href={s.url} className='link' target='_blank' rel='noreferrer'>{s.label}</a>))}</div></div></footer></ThemeProvider></body></html>) }
