import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function forgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 min-h-screen p-8">
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Forgot Password</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email to reset your password.</p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="example@email.com" type="email" />
          </div>
          <Button className="w-full" type="submit">
            Reset Password
          </Button>
        </form>
        <div className="text-center text-gray-500 dark:text-gray-400">
          <Link className="font-medium text-gray-900 hover:underline dark:text-gray-50" href="#">
            Create an account
          </Link>
          {" \n              "}or
          <Link className="font-medium text-gray-900 hover:underline dark:text-gray-50" href="#">
            sign in
          </Link>
        </div>
      </div>
    </div>
  )
}