import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Hello</h1>
      <div>
        {session ? (
          <>
          <p>hi {session.user?.name}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              signOut().catch(console.log);
            }}
            >
              Logout
            </button>
          </>
        ) : (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              signIn('discord').catch(console.log);
            }}
          >
          Login with Discord
          </button> 
        )}
      </div>
    </main>
  );
};

export default api.withTRPC(Home);