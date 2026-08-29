"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ post }: any) => {
  const pathUrl = usePathname();

  return (
    <li>
      <Link
        href={`/docs/${post?.slug}`}
        className={`block rounded-md px-3 py-2.5 font-medium duration-300 hover:text-white ${
          pathUrl === `/docs/${post?.slug}` ? "bg-white/10 text-white" : ""
        }`}
      >
        {post?.title}
      </Link>
    </li>
  );
};

export default SidebarLink;
