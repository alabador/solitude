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

    return (
        <section className="p-8 grid grid-cols-1 gap-8">
            {members.map(({name, rank, uuid}:{name:string, rank:string, uuid:string}) => {
                return (
                    <MemberCard name={name} rank={rank} uuid={uuid}/>
                );
            })
            }
        </section>
    )
}
