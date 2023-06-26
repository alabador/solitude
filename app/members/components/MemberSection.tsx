import MemberCard from "./MemberCard";

async function getUserData(user:string) {
    const userDataUrl = `https://api.wynncraft.com/v2/player/${user}/stats`
    const res = await fetch(userDataUrl);
  
    if(!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }

export default async function MemberSection({data}:
    {data:Promise<{members:[]}>}) {
    const members = (await data).members;
    // enter name of user, gets passed as promise
    // const userData = getUserData();
    return (
        <section className="p-8">
            {members.map(({name, rank}:{name:string, rank:string}) => {
                return (<h1>{name} {rank}</h1>);
            })
            }
            {/* <MemberCard userData={data}/> */}
        </section>
    )
}
