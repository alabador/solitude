import Image from "next/image";

async function getUserData(user:string) {
    const userDataUrl = `https://api.wynncraft.com/v2/player/${user}/stats`
    const res = await fetch(userDataUrl);
  
    if(!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }

export default async function MemberCard({ name, rank, uuid }: { name:string, rank:string, uuid:string }) {

    const avatarImageUrl = `https://visage.surgeplay.com/full/${uuid}`;
    const userData = await getUserData(name);
    let isOnline = userData.data[0].meta.location.online;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl relative">
            <span 
                className={`badge absolute text-white top-4 right-4 ${isOnline ? 'bg-green-500' : 'bg-red-600'}`}
            >
                {isOnline ? "Online" : "Offline"}
            </span>
            <figure className="p-4">
                <Image 
                    src={avatarImageUrl} 
                    alt="Album"
                    width={150} 
                    height={250}
                />
            </figure>
            <div className="card-body justify-between">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <h3>{rank}</h3>
                </div>
                <a 
                    className="btn btn-primary"
                    href={`https://wynncraft.com/stats/player/${name}`}
                    target="_blank"
                >More Info</a>
            </div>
        </div>
    );
}
