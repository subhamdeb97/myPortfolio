export type Social={label:'GitHub'|'LinkedIn'|'Twitter'|'Website'|'Instagram'|'Dribbble';url:string}
export type Project={title:string;description:string;tags:string[];image?:string;link?:string;repo?:string;year?:string;highlight?:boolean}
export type Experience={company:string;role:string;period:string;summary:string;bullets:string[];logo?:string}
export type Testimonial={name:string;role:string;quote:string;avatar?:string}
export type Profile={name:string;role:string;location:string;email:string;headline:string;about:string[];socials:Social[];skills:string[];highlights:string[];projects:Project[];experience:Experience[];testimonials:Testimonial[];resumeUrl?:string}

export const profile:Profile={
  name:'Subham Deb', role:'Senior Front‑End & TypeScript Engineer', location:'Your City, Country', email:'you@example.com',
  headline:'I craft fast, accessible interfaces with modern TypeScript and beautiful micro‑interactions.',
  about:['I’m a product‑minded engineer focused on performance, design systems, and delightful UX.','I partner with teams to ship polished, measurable outcomes — not just features.'],
  socials:[{label:'GitHub',url:'https://github.com/yourhandle'},{label:'LinkedIn',url:'https://linkedin.com/in/yourhandle'},{label:'Website',url:'https://yourdomain.com'}],
  skills:['TypeScript','React','Next.js','Node.js','Tailwind','Framer Motion','Zod','Prisma','AWS','Vercel'],
  highlights:['Led TS migration 100k+ LOC','Built design system adopted across 4 teams','Improved Core Web Vitals to 95+ p75'],
  projects:[
    {title:'Showcase — Ultra Fast E‑commerce',description:'Edge‑rendered storefront with granular caching and RSC.',tags:['Next.js','TypeScript','Tailwind','Vercel'],image:'/images/p1.jpg',link:'#',repo:'#',year:'2025',highlight:true},
    {title:'Analytics Studio',description:'Interactive dashboards with streaming charts.',tags:['React','TypeScript','Websockets'],image:'/images/p2.jpg',link:'#',repo:'#',year:'2024'},
    {title:'Design System',description:'Accessible components with tokens & theming.',tags:['Storybook','Tailwind','TS'],image:'/images/p3.jpg',link:'#',repo:'#',year:'2023'}
  ],
  experience:[
    {company:'Acme Inc.',role:'Senior Front‑End Engineer',period:'2023 — Present',summary:'Own web platform experience & performance.',bullets:['Cut LCP by 38% with image strategy & code‑splitting','Authored component library used in 12 apps'],logo:'🅰️'},
    {company:'Globex',role:'Software Engineer',period:'2021 — 2023',summary:'Built analytics UIs and APIs.',bullets:['Shipped real‑time dashboards at 1M events/min','Introduced robust typing across services'],logo:'🅶'}
  ],
  testimonials:[
    {name:'Priya Sharma',role:'PM',quote:'Delivers reliable features with a keen eye for UX and detail.'},
    {name:'Rahul Verma',role:'Design Lead',quote:'Translates complex interactions into elegant, accessible UI.'},
  ],
  resumeUrl:''
}
