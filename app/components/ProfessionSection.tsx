import ProfessionCard from '@/components/ProfessionCard'
import React from 'react'
import { albertSans } from '@/styles/fonts'

import Mining from '@/public/icons/mining.svg'
import Chop from '@/public/icons/axe-in-log.svg'
import Farm from '@/public/icons/pitchfork.svg'
import Fish from '@/public/icons/fishing-pole.svg'

import Armouring from '@/public/icons/armor-vest.svg'
import Tailoring from '@/public/icons/leg-armor.svg'
import Weaponsmithing from '@/public/icons/gladius.svg'
import Woodworking from '@/public/icons/spiral-arrow.svg'
import Jeweling from '@/public/icons/gem-chain.svg'
import Alchemism from '@/public/icons/potion-ball.svg'
import Scribing from '@/public/icons/tied-scroll.svg'
import Cooking from '@/public/icons/marshmallows.svg'

export default function ProfessionSection() {
  return (
    <section>
        <h3 className={`${albertSans.className} text-center text-xl font-medium`}>Gathering Professions</h3>
        <section className='p-16 md:p-24 pt-0 grid grid-cols-2 lg:grid-cols-4 gap-6'>
            <ProfessionCard title='Mining' image={Mining}/>
            <ProfessionCard title='Woodcutting' image={Chop}/>
            <ProfessionCard title='Farming'image={Farm}/>
            <ProfessionCard title='Fishing'image={Fish}/>
        </section>
        <h3 className={`${albertSans.className} text-center text-xl font-medium`}>Crafting Professions</h3>
        <section className='p-16 md:p-24 pt-0 grid grid-cols-2 lg:grid-cols-4 gap-6'>
            <ProfessionCard title='Armouring' image={Armouring}/>
            <ProfessionCard title='Tailoring' image={Tailoring}/>
            <ProfessionCard title='Weaponsmithing' image={Weaponsmithing}/>
            <ProfessionCard title='Woodworking' image={Woodworking}/>
            <ProfessionCard title='Jeweling' image={Jeweling}/>
            <ProfessionCard title='Alchemism' image={Alchemism}/>
            <ProfessionCard title='Scribing' image={Scribing}/>
            <ProfessionCard title='Cooking' image={Cooking}/>
        </section>
    </section>
  )
}
