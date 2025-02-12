"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Path may differ depending on your setup

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
          Data-Chat
        </h1>
        <p className="text-lg text-gray-700 sm:text-xl mb-6">
          Unlock Business & Financial Insights with Generative AI
        </p>
        <p className="text-base text-gray-600 sm:text-lg mb-8">
          <strong>Data-Chat</strong> is your next-generation SaaS for rapid,
          reliable, and powerful analytics. Whether you need deep financial
          forecasting or business intelligence, let cutting-edge AI do the heavy
          lifting.
        </p>

        {/* Call-to-action: Link to the prototype */}
        <div className="flex flex-col justify-center sm:flex-row gap-4">        
          <Link href="https://data-chat-ai.streamlit.app" passHref>
          <Button variant="default" size="lg">
            Prototype
          </Button>
        </Link>
        <Link  href="/data-grid" passHref>
          <Button variant="default" size="lg">
            Data-Grid
          </Button>
          </Link>
          <Link  href="/data-grid-react" passHref>
          <Button variant="default" size="lg">
            Data-Grid-React
          </Button>
        </Link>          
        <Link  href="/data-grid-dynamic" passHref>
          <Button variant="default" size="lg">
            Data-Grid-Dynamic
          </Button>
        </Link>
        <Link  href="/data-grid-dynamic-load" passHref>
          <Button variant="default" size="lg">
            Data-Grid-Dynamic-Load
          </Button>
        </Link>
        
        </div>
  </section>

      {/* Optional Footer / Social Proof */}
      <footer className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Data-Chat. All rights reserved.
      </footer>
    </main>
  );
}



