import SidebarLink from "@/components/Docs/SidebarLink";
import { getAllPosts } from "@/libs/markdown";
import type { PropsWithChildren } from "react";

export default async function DocsLayout({ children }: PropsWithChildren) {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <div className='mx-auto grid max-w-[1170px] gap-x-8 gap-y-4 pt-24 pb-16 md:pt-28 md:pb-20 lg:grid-cols-[auto_1fr] lg:pt-32 lg:pb-24'>
      <aside className='max-h-fit rounded-lg bg-white/5 p-4 lg:sticky lg:top-[80px]'>
        <nav>
          <ul className='space-y-2'>
            {posts.map((post, key) => (
              <SidebarLink post={post} key={key} />
            ))}
          </ul>
        </nav>
      </aside>

      <main className='prose prose-invert rounded-lg bg-white/5 px-8 py-11 sm:p-[55px] lg:px-8 xl:p-[55px]'>
        {children}
      </main>
    </div>
  );
}
