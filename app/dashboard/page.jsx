"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Copy, Trophy, Clock, Rocket, Share } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      alert("You are not logged in. Redirecting to homepage...");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, [router]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://example.com/donation-link");
    alert("Link copied to clipboard!");
  };

  const handleShareOnWhatsApp = () => {
    const url = "https://example.com/donation-link";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col p-4 min-h-screen relative bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-col items-center justify-center w-40 h-40 border-4 border-dotted border-red-500 rounded-full bg-white shadow-lg hover:scale-105 transition-transform">
          <Trophy className="text-3xl text-red-500 mb-2" />
          <span className="text-gray-600">Goal Achieved</span>
          <span className="text-3xl font-bold text-red-500">10</span>
        </div>
        
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-96">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="text-2xl text-yellow-500" />
            <span className="text-xl font-semibold">Level Achieved: Star</span>
          </div>
          
          <div className="w-full h-2 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-full my-4"></div>
          
          <div className="flex items-center gap-2 mb-4">
            <Share className="text-xl text-blue-500" />
            <span className="font-medium">Rewards</span>
          </div>
          
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 mt-2 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all w-full justify-center"
          >
            <Copy /> Copy Donation Link
          </button>
          
          <div className="flex items-center gap-2 mt-6">
            <Rocket className="text-xl text-purple-500" />
            <span>Unlock Bronze Level at 5000</span>
          </div>
          
          <div className="flex items-center gap-2 mt-4">
            <Clock className="text-xl text-red-500" />
            <span>TIME LEFT: 48h</span>
          </div>
          
          <button
            onClick={() => router.push("/extend")}
            className="mt-4 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors w-full flex items-center justify-center gap-2"
          >
            <Clock /> Extend Now
          </button>
          
          <div className="w-full h-1 bg-gray-200 my-4"></div>
          
          <button
            onClick={() => router.push("/start-here")}
            className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all w-full flex items-center justify-center gap-2"
          >
            <Rocket /> Start Here
          </button>
        </div>
      </div>

      <button
        onClick={handleShareOnWhatsApp}
        className="fixed bottom-6 left-6 bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
      >
        <FaWhatsapp className="text-xl" />
        Share on WhatsApp
      </button>
    </div>
  );
}