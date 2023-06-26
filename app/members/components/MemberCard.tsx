import Image from "next/image";

export default function MemberCard({ userData }: { userData: Promise<{}> }) {
//   const uuid = userData.uuid;
  const avatarImageUrl = "https://visage.surgeplay.com/";

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <Image src="" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
}
