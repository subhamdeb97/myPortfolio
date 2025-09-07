import { NextResponse } from 'next/server'
export async function POST(req:Request){ const form=await req.formData(); const payload=Object.fromEntries(form.entries()); console.log('Contact form submission:', payload); return NextResponse.json({ok:true}) }
