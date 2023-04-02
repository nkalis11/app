import { NextPage } from "next";
import Head from "next/head";
import { ClerkProvider, useUser, SignInButton, SignOutButton } from '@clerk/nextjs';
import Header from "~/components/Nav/Header";
import Sidebar from "~/components/Nav/Sidebar";


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
      <Header /> 
      <Sidebar />
      <main className="flex justify-center">
        <div className="bg-red-200 md:max-w-2xl border-x">
          <div>
            {! user.isSignedIn && <SignInButton />}
            {!! user.isSignedIn}
          </div>
          <div>
            {data?.map((post) => (
              <div key={post.id}>{post.content}</div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default api.withTRPC(Home);