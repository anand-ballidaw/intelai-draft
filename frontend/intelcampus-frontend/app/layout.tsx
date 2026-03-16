import "./globals.css"

import "@/integrations/email.integration"
import "@/integrations/whatsapp.integration"

import { platformOrchestrator } from "@/core/platform/platform-orchestrator"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // Initialize the platform once
  platformOrchestrator.initialize()

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}