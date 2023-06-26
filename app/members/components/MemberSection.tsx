import MemberCard from "./MemberCard";


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
