import "./globals.css"
import { AuthProvider } from "@/components/auth/auth-provider"
import ToastContainer from "@/components/ui/toast-container"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">

      <body className="bg-background text-foreground">

        <AuthProvider>

          {children}

          <ToastContainer />

        </AuthProvider>

      </body>

    </html>

  )
}