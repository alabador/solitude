import WideContentBlock from '@/components/WideContentBlock'
import React from 'react'
import MemberSection from './components/MemberSection';


async function getGuildData(url:string) {
  const res = await fetch(url);
  
  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

// Get data for guild
export default async function Members() {
  // const guildInfo = 'https://api.wynncraft.com/public_api.php?action=guildStats&command=The%20House%20of%20Solitude';
  
  const testInfo = 'https://dummyjson.com/products/1';
  const guildData = getGuildData(testInfo);
  
  
  // const [guild, user] = await Promise.all([guildData, userData])

  return (
    <main className="min-h-screen">
      <WideContentBlock style='bg-blue-950 text-white' title='Guild Members' text='The current guild members of Solitude.'/>
      <MemberSection data={guildData}/>
    </main>
  )
}

