import React from 'react';
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e2f] to-[#121212] text-white flex flex-col items-center justify-center p-6 space-y-10">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">🎧 switchsound</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Seamlessly switch between music and video with a single tap. One player. Two modes. Zero friction.
        </p>
        <Button className="text-lg px-6 py-3 rounded-2xl shadow-xl hover:scale-105 transition">
          🚀 Try the Demo
        </Button>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#2c2c3d] p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🎥 Video Mode</h2>
          <p className="text-gray-400">Enjoy music videos with smooth playback and clean UI.</p>
        </div>
        <div className="bg-[#2c2c3d] p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🎧 Audio Mode</h2>
          <p className="text-gray-400">Switch to background audio instantly. Save battery and stay in the zone.</p>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">📅 Roadmap</h2>
        <ul className="text-gray-300 list-disc list-inside space-y-2">
          <li>✅ Toggle between video and audio</li>
          <li>✅ Dark/light UI modes</li>
          <li>🔜 Playlist saving</li>
          <li>🔜 Mobile-first improvements</li>
          <li>🔜 Community feedback integration</li>
        </ul>
      </div>

      <div className="w-full max-w-4xl mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">💬 What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#2c2c3d] p-4 rounded-xl text-gray-300">
            "I’ve always wanted a player that adapts to how I listen. This is it."
            <p className="mt-2 text-sm text-gray-500">– Beta Tester</p>
          </div>
          <div className="bg-[#2c2c3d] p-4 rounded-xl text-gray-300">
            "Switching modes without restarting the track? Genius."
            <p className="mt-2 text-sm text-gray-500">– Indie Hacker</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-10 text-center">
        <h2 className="text-2xl font-bold mb-4">📦 Open Source</h2>
        <p className="text-gray-300 mb-4">
          Explore the code and contribute on GitHub:
        </p>
        <a href="https://github.com/minyorange/switchsound" className="text-blue-400 hover:underline text-lg">
          github.com/minyorange/switchsound
        </a>
      </div>

      <div className="text-center mt-10">
        <p className="text-gray-500 text-sm">Built in public by <a href="https://x.com/minyorange" className="text-blue-400 hover:underline">@minyorange</a></p>
      </div>
    </div>
  );
}
