import ProfessionCard from '@/components/ProfessionCard'
import React from 'react'

import Mining from '@/public/icons/mining.svg'
import Chop from '@/public/icons/axe-in-log.svg'
import Farm from '@/public/icons/pitchfork.svg'
import Fish from '@/public/icons/fishing-pole.svg'

export default function ProfessionSection() {
  return (
    <section className='p-12 pt-0 md:p-24 md:pt-0 grid grid-cols-2 lg:grid-cols-4 gap-4'>
        <ProfessionCard title='Mining' image={Mining}/>
        <ProfessionCard title='Woodcutting' image={Chop}/>
        <ProfessionCard title='Farming'image={Farm}/>
        <ProfessionCard title='Fishing'image={Fish}/>
    </section>
  )
}
