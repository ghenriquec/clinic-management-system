import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function appointmentsSchedule() {
  return (
    <>
      <div className="max-w-6xl mx-auto p-4 lg:px-6 sm:py-8 md:py-10">
        <section className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Book an Appointment</h1>
            <p className="text-gray-500 dark:text-gray-400">Select a date and time that works best for you.</p>
            <div className="border rounded-lg overflow-hidden">
              <Calendar
                className="p-4 [&_td]:w-10 [&_td]:h-10 [&_th]:w-10 [&_[name=day]]:w-10 [&_[name=day]]:h-10 [&>div]:space-x-0 [&>div]:gap-4"
                mode="single"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Select Time</Label>
              <Select id="time">
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="13:00">1:00 PM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Patient Information</h2>
            <p className="text-gray-500 dark:text-gray-400">Please fill out the form to book your appointment.</p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
            <div className="space-y-2">
                <Label htmlFor="appointment">Appointment Type</Label>
                <Select id="appointment">
                    <SelectTrigger>
                        <SelectValue placeholder="Select appointment type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="physical">Physical Exam</SelectItem>
                        <SelectItem value="dental">Dental Exam</SelectItem>
                        <SelectItem value="vision">Vision Exam</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>
            </div>
              <Button className="w-full" size="lg">
                Book Appointment
              </Button>
            </form>
          </div>
        </section>
      </div>
      <div className="max-w-6xl mx-auto p-4 lg:px-6 sm:py-8 md:py-10">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Appointment Confirmed</h2>
          <div className="border rounded-lg p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Appointment Type</p>
                <p className="font-medium">Physical Exam</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Date</p>
                <p className="font-medium">May 15, 2023</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Time</p>
                <p className="font-medium">2:00 PM</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Patient</p>
                <p className="font-medium">John Doe</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium">john@example.com</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Phone</p>
                <p className="font-medium">(123) 456-7890</p>
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="px-6 py-2 rounded-md" variant="outline">
                Cancel Appointment
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}