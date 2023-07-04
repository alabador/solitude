import MemberCard from "./MemberCard";

interface memberProps {
    name: string,
    uuid: string,
    rank: string,
    contributed: number,
    joined: any,
    joinedFriendly: any
}

export default async function MemberSection({data}:
    {data:Promise<{members:[]}>}) {
    const members = (await data).members;
    const highRanks = members.filter((member:memberProps) => {
        return member.rank == "OWNER" || member.rank == "CHIEF"
    });
    const standardMembers = members.filter((member:memberProps) => {
        return member.rank !== "OWNER" && member.rank !== "CHIEF"
    });


    return (
        <section className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {members.map(({name, rank, uuid}:{name:string, rank:string, uuid:string}) => {
                return (
                    <MemberCard name={name} rank={rank} uuid={uuid}/>
                );
            })
            }
        </section>
    )
}
