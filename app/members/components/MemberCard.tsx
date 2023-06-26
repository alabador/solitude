import Image from "next/image";

export default function MemberCard({ name, rank, uuid }: { name:string, rank:string, uuid:string }) {
//   const uuid = userData.uuid;
  const avatarImageUrl = `https://visage.surgeplay.com/full/${uuid}`;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="p-4">
        <Image 
            src={avatarImageUrl} 
            alt="Album"
            width={150} 
            height={250}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3>{rank}</h3>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
}
