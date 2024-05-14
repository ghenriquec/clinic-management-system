import Image from "next/image";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"


export default function Page() {
  return (
    <div className="grid min-h-screen grid-cols-1">
      <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-950 p-8">
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome back!</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your email and password to sign in.</p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="example@email.com" type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              Don't have an account?
              <Button className="font-medium text-gray-900 hover:underline dark:text-gray-50" variant="link">
                Sign up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
