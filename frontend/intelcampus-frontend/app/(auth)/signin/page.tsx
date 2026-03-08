import SignInForm from "@/components/auth/signin-form"

export default function SignInPage() {

    return (

        <div className="min-h-screen flex items-center justify-center">

            <div className="w-full max-w-md border rounded-xl p-8">

                <h1 className="text-2xl font-semibold mb-6 text-center">
                    Sign In
                </h1>

                <SignInForm />

            </div>

        </div>

    )
}