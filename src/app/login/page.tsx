import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Hero Image */}
      <div className="hidden lg:flex relative bg-slate-900 items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-slate-900/50" />
        <div className="relative z-10 max-w-lg space-y-6">
          <img src="/mma-fighter-intense-training-gym.jpg" alt="MMA Training" className="rounded-lg shadow-2xl" />
          <blockquote className="text-2xl font-bold text-white text-balance">
            "Champions aren't made in gyms. Champions are made from something they have deep inside them."
          </blockquote>
          <p className="text-red-400 font-semibold">— Muhammad Ali</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex items-center justify-center p-8 bg-slate-950">
        <LoginForm />
      </div>
    </div>
  )
}
