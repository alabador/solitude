import Link from "next/link";

export default function NavMobileMenu() {
  return (
    <nav>
      <ul className="menu bg-base-200 w-56 rounded-box absolute top-full right-0.5">
        <li>
          <Link href="/members">Guild Members</Link>
        </li>
        <li>
          <Link href="/faq">Guild Info/FAQ</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
      </ul>
    </nav>
  );
}
