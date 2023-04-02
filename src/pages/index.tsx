import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ClerkProvider, useUser, SignIn, SignedOut } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";


import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();

  const { data } = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Next.js + tRPC + Clerk</title>
        <meta name="description" content="Next.js + tRPC + Clerk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>
          {! user.isSignedIn && <SignInButton />}
          {!! user.isSignedIn && <SignOutButton />}
        </div>
        <div>
          {data?.map((post) => (
            <div key={post.id}>{post.content}</div>
          ))}
        </div>
      </main>
    </>
  );
};

export default api.withTRPC(Home);