import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function PatientsTable() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Gerenciamento de Pacientes</h1>
        <Button className="flex items-center gap-2" variant="primary">
          <PlusIcon className="h-5 w-5" />
          Adicionar Paciente
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b">
          <div className="flex items-center gap-4">
            <div className="relative w-full">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input
                className="pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Pesquisar pacientes..."
                type="text"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2" variant="outline">
                  <FilterIcon className="h-5 w-5" />
                  Filtros
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuLabel>Filtrar por:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>Nome</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Data de Nascimento</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>CPF</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Contato</DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Endereço</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Data de Nascimento</TableHead>
              <TableHead>CPF</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Endereço</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>01/01/1990</TableCell>
              <TableCell>123.456.789-00</TableCell>
              <TableCell>(11) 98765-4321</TableCell>
              <TableCell>Rua Exemplo, 123 - São Paulo, SP</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <EyeIcon className="h-5 w-5" />
                    <span className="sr-only">Visualizar</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <DeleteIcon className="h-5 w-5" />
                    <span className="sr-only">Editar</span>
                  </Button>
                  <Button className="text-red-500 hover:text-red-600" size="icon" variant="outline">
                    <TrashIcon className="h-5 w-5" />
                    <span className="sr-only">Remover</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>15/05/1985</TableCell>
              <TableCell>987.654.321-00</TableCell>
              <TableCell>(21) 12345-6789</TableCell>
              <TableCell>Avenida Exemplo, 456 - Rio de Janeiro, RJ</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <EyeIcon className="h-5 w-5" />
                    <span className="sr-only">Visualizar</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <DeleteIcon className="h-5 w-5" />
                    <span className="sr-only">Editar</span>
                  </Button>
                  <Button className="text-red-500 hover:text-red-600" size="icon" variant="outline">
                    <TrashIcon className="h-5 w-5" />
                    <span className="sr-only">Remover</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Michael Johnson</TableCell>
              <TableCell>20/12/1992</TableCell>
              <TableCell>456.789.123-00</TableCell>
              <TableCell>(31) 98765-4321</TableCell>
              <TableCell>Rua Exemplo, 789 - Belo Horizonte, MG</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline">
                    <EyeIcon className="h-5 w-5" />
                    <span className="sr-only">Visualizar</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <DeleteIcon className="h-5 w-5" />
                    <span className="sr-only">Editar</span>
                  </Button>
                  <Button className="text-red-500 hover:text-red-600" size="icon" variant="outline">
                    <TrashIcon className="h-5 w-5" />
                    <span className="sr-only">Remover</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function DeleteIcon(props) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function EyeIcon(props) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}