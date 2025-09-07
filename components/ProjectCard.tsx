'use client'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
export default function ProjectCard({ title, description, tags, image, link, repo, year }:{ title:string; description:string; tags:string[]; image?:string; link?:string; repo?:string; year?:string }){
  return (<motion.div whileHover={{ y:-4 }} className='card overflow-hidden'>
    <div className='relative h-44 w-full'>
      <Image src={image || '/images/placeholder.jpg'} alt={title} fill className='object-cover'/>
      {year && <div className='absolute top-3 right-3 badge bg-white/80 dark:bg-black/60'>{year}</div>}
    </div>
    <div className='p-5'>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='mt-1 text-gray-700 dark:text-gray-300'>{description}</p>
      <div className='mt-3 flex flex-wrap gap-2'>{tags.map(t=>(<span key={t} className='badge'>{t}</span>))}</div>
      <div className='mt-4 flex items-center gap-2'>
        {link && <a href={link} target='_blank' className='btn' rel='noreferrer'><ExternalLink className='w-4 h-4'/> Live</a>}
        {repo && <a href={repo} target='_blank' className='btn' rel='noreferrer'><Github className='w-4 h-4'/> Code</a>}
      </div>
    </div>
  </motion.div>)
}
