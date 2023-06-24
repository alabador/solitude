import ProfessionCard from '@/components/ProfessionCard'
import React from 'react'

export default function ProfessionSection() {
  return (
    <section className='p-12 pt-0 md:p-24 md:pt-0 grid grid-cols-2 lg:grid-cols-4 gap-4'>
        <ProfessionCard title='Mining'/>
        <ProfessionCard title='Woodcutting'/>
        <ProfessionCard title='Farming'/>
        <ProfessionCard title='Fishing'/>
    </section>
  )
}
