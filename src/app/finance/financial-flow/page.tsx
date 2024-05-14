import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CardDescription, CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function FinanceFlow() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <div className="w-full flex-1">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-lg md:text-xl">Fluxo Financeiro</h1>
            <div className="ml-auto flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-[280px] justify-start text-left font-normal" id="date" variant="outline">
                    <CalendarClockIcon className="mr-2 h-4 w-4" />
                    Junho 01, 2023 - Junho 30, 2023
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-auto p-0">
                  <Calendar initialFocus mode="range" numberOfMonths={2} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid gap-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardDescription>Receita Total</CardDescription>
                <CardTitle>R$ 2.389,00</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-md dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Gráfico de barras empilhadas</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Despesas</CardDescription>
                <CardTitle>R$ 1.454,00</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-md dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Gráfico de linha com gradiente</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Lucratividade</CardDescription>
                <CardTitle>R$ 986,00</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-md dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Gráfico de pizza</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <h2 className="font-semibold text-lg md:text-xl">Relatórios</h2>
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data Inicial</TableHead>
                  <TableHead>Data Final</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>01 de Junho, 2023</TableCell>
                  <TableCell>30 de Junho, 2023</TableCell>
                  <TableCell className="text-right">
                    <Button size="icon" variant="ghost">
                      <DownloadIcon className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01 de Maio, 2023</TableCell>
                  <TableCell>31 de Maio, 2023</TableCell>
                  <TableCell className="text-right">
                    <Button size="icon" variant="ghost">
                      <DownloadIcon className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01 de Abril, 2023</TableCell>
                  <TableCell>30 de Abril, 2023</TableCell>
                  <TableCell className="text-right">
                    <Button size="icon" variant="ghost">
                      <DownloadIcon className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  )
}

function CalendarClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.3V14" />
      <circle cx="16" cy="16" r="6" />
    </svg>
  )
}


function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}