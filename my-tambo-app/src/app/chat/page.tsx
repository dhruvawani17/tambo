"use client";

import { MessageThreadFull } from "@/components/tambo/message-thread-full";
import { useMcpServers } from "@/components/tambo/mcp-config-modal";
import { components, tools } from "@/lib/tambo";
import { TamboProvider } from "@tambo-ai/react";
import Link from "next/link";
import { InteractiveBackground } from "@/components/ui/interactive-background";

/**
 * Home page component that renders the Tambo chat interface.
 *
 * @remarks
 * The `NEXT_PUBLIC_TAMBO_URL` environment variable specifies the URL of the Tambo server.
 * You do not need to set it if you are using the default Tambo server.
 * It is only required if you are running the API server locally.
 *
 * @see {@link https://github.com/tambo-ai/tambo/blob/main/CONTRIBUTING.md} for instructions on running the API server locally.
 */
export default function Home() {
  // Load MCP server configurations
  const mcpServers = useMcpServers();
  const apiKey = process.env.NEXT_PUBLIC_TAMBO_API_KEY;

  if (!apiKey) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-950 text-white p-4">
        <div className="max-w-md w-full bg-slate-900 border border-red-500/20 rounded-2xl p-8 shadow-2xl text-center">
             <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
             </div>
             <h2 className="text-xl font-bold mb-2">API Key Missing</h2>
             <p className="text-slate-400 mb-6">
               You need to configure your Tambo API key to access the chat interface.
             </p>
             <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-sm text-slate-300 mb-6 break-all">
                NEXT_PUBLIC_TAMBO_API_KEY
             </div>
             <Link href="/" className="inline-flex items-center justify-center px-6 py-2 bg-white text-slate-900 font-medium rounded-full hover:bg-slate-100 transition-colors">
               Return Home
             </Link>
        </div>
      </div>
    );
  }

  return (
    <TamboProvider
      apiKey={apiKey}
      components={components}
      tools={tools}
      tamboUrl={process.env.NEXT_PUBLIC_TAMBO_URL}
      mcpServers={mcpServers}
    >
      <InteractiveBackground>
        <MessageThreadFull />
      </InteractiveBackground>
    </TamboProvider>
  );
}
