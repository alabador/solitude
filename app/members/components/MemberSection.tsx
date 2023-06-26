import MemberCard from "./MemberCard";

async function getUserData(user:string) {
    const userDataUrl = `https://api.wynncraft.com/v2/player/${user}/stats`
    const res = await fetch(userDataUrl);
  
    if(!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }

export default function MemberSection({data}:
    {data:Promise<{}>}) {
    // enter name of user, gets passed as promise
    // const userData = getUserData();
    return (
        <section className="p-8">
            <MemberCard userData={data}/>
        </section>
    )
}
