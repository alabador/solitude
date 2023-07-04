import MemberCard from "./MemberCard";
import { unicaOne } from "@/styles/fonts";

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
        <section className="p-8">
            <section className="py-8">
                <h3 className={`${unicaOne.className} text-center pb-8 text-xl`}>Solitude High Command</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {highRanks.map(({name, rank, uuid}:{name:string, rank:string, uuid:string}) => {
                        return (
                            <MemberCard name={name} rank={rank} uuid={uuid}/>
                        );
                        })
                    }
                </div>
            </section>
            <section className="py-8">
                <h3 className={`${unicaOne.className} text-center pb-8 text-xl`}>Citizens of Solitude</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {standardMembers.map(({name, rank, uuid}:{name:string, rank:string, uuid:string}) => {
                        return (
                            <MemberCard name={name} rank={rank} uuid={uuid}/>
                        );
                        })
                    }
                </div>
            </section>
        </section>
    )
}
