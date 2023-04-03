import { NextPage } from "next";
import Head from "next/head";
import { ClerkProvider, useUser, SignInButton, SignOutButton } from '@clerk/nextjs';
import Header from "~/components/Nav/Header";
import Sidebar from "~/components/Nav/Sidebar";
import Maintenance from "~/components/Cards/Maintenance";


import { api } from "~/utils/api";

const CreatePostWizard = () => {
  const { user } = useUser();

  if (!user) return null;

  return <div>
    <img src={user.profileImageUrl} alt="Profile Img"/>
  </div>
};
  
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
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex flex-col w-full bg-white">
          <Header />
          <div>
            {!user.isSignedIn && <SignInButton />}
            {!!user.isSignedIn}
          </div>
          <div className="grid grid-cols-6 gap-8 p-10">
            <Maintenance />
          </div>
          {/* <div>
            {data?.map((post) => (
              <div key={post.id}>{post.content}</div>
            ))}
          </div> */}
        </main>
      </div>
    </>
  );
};

export default api.withTRPC(Home);