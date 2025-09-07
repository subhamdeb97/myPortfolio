import { profile } from '@/content/site'
import ProjectCard from '@/components/ProjectCard'
export const metadata={ title:'Work — Portfolio' }
export default function WorkPage(){ return (<div className='space-y-6'><h1 className='text-2xl font-bold'>Selected Projects</h1><div className='grid md:grid-cols-3 gap-4'>{profile.projects.map(p=>(<ProjectCard key={p.title} {...p}/>))}</div></div>) }
