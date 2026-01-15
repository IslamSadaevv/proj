import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Hero Image */}
      <div className="hidden lg:flex relative bg-slate-900 items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-slate-900/50" />
        <div className="relative z-10 max-w-lg space-y-6">
          <img src="/mma-fighter-victory-celebration-octagon.jpg" alt="MMA Victory" className="rounded-lg shadow-2xl" />
          <blockquote className="text-2xl font-bold text-white text-balance">
            "It's not whether you get knocked down, it's whether you get up."
          </blockquote>
          <p className="text-red-400 font-semibold">— Vince Lombardi</p>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex items-center justify-center p-8 bg-slate-950">
        <RegisterForm />
      </div>
    </div>
  )
}
