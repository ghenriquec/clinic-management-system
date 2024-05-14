import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function resetPassword() {
  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 min-h-screen p-8">
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter the code sent to your email to reset your password.</p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Code</Label>
            <Input id="code" placeholder="Enter code" type="text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <Input id="password" placeholder="Enter new password" type="password" />
          </div>
          <Button className="w-full" type="submit">
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  )
}