'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Form from '@/components/custom/form'
import FormInput from '@/components/custom/formInput'
import { Loader2 } from 'lucide-react'
import { useZodValidatedForm } from '@/lib/useZodValidatedForm'
import { loginAction } from '@/serverFunctions/auth'
import { signInSchema } from '@/schemas/userSchemas'

export function LoginForm() {
  const [form, action, state] = useZodValidatedForm(signInSchema, loginAction)
  const router = useRouter()

  // Redirect wanneer login succesvol is
  useEffect(() => {
    if (form.formState.isSubmitSuccessful && state.success) {
      router.push('/dashboard')
      router.refresh()
    }
  }, [form.formState.isSubmitSuccessful, state.success, router])

  return (
    <Card className="w-full max-w-md bg-slate-900 border-slate-800">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-10 w-10 rounded-lg bg-red-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">FC</span>
          </div>
          <CardTitle className="text-2xl font-bold text-white">FightCamp</CardTitle>
        </div>
        <CardDescription className="text-slate-400">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>

      <Form hookForm={form} action={action}>
        <CardContent className="space-y-4">
          <FormInput name="email" label="Email" placeholder="your@email.com" type="email" />
          <FormInput name="password" label="Password" placeholder="••••••••" type="password" />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" className="border-slate-700 bg-slate-800 data-[state=checked]:bg-red-600"/>
              <label htmlFor="remember" className="text-sm text-slate-400 cursor-pointer">Remember me</label>
            </div>
            <Link href="#" className="text-sm text-red-400 hover:text-red-300">Forgot password?</Link>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <Button 
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing in...</> : "Sign In"}
          </Button>
          <p className="text-sm text-slate-400 text-center">
            Don't have an account?{' '}
            <Link href="/register" className="text-red-400 hover:text-red-300 font-semibold">Sign up</Link>
          </p>
        </CardFooter>
      </Form>
    </Card>
  )
}
