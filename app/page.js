"use client"
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onclick = () => {
    router.push('/Dashboard');
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 text-white overflow-hidden">
      {/* Glare Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-30 animate-glare"></div>

      {/* Flash Effect */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl animate-flash"></div>

      <div className="text-center relative z-10">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md animate-pulse">
          Welcome to EduAI
        </h1>
        <p className="text-lg font-medium mb-6 drop-shadow-sm">
          Revolutionizing education with AI-powered personalized learning.
        </p>
        <Button onClick={onclick} className="px-6 py-3 text-lg font-semibold bg-white text-red-600 rounded-lg shadow-lg hover:bg-gray-100 hover:text-orange-600 transition duration-300">
          Start Now
        </Button>
        <UserButton/>
      </div>
    </div>
  );
}
