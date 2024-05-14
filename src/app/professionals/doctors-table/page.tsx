import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu, DropdownMenuRadioItem, DropdownMenuRadioGroup } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function DoctorsTable() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Gerenciamento de Médicos</h1>
          <Button className="bg-primary-500 hover:bg-primary-600 text-white" size="sm">
            Adicionar Médico
          </Button>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b">
            <div className="flex items-center gap-4">
              <div className="relative w-full">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  className="pl-10 pr-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Pesquisar médicos..."
                  type="text"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2" size="sm" variant="outline">
                    <FilterIcon className="w-4 h-4" />
                    Filtrar
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Filtrar por:</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Nome</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Especialidade</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>CRM</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2" size="sm" variant="outline">
                    <ListOrderedIcon className="w-4 h-4" />
                    Ordenar
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuRadioGroup value="featured">
                    <DropdownMenuRadioItem value="featured">Destaque</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="newest">Mais Recentes</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="low">Menor Preço</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="high">Maior Preço</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Especialidade</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>CRM</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Dr. João Silva</TableCell>
                <TableCell>Cardiologia</TableCell>
                <TableCell>joao.silva@clinica.com</TableCell>
                <TableCell>123456</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <DeleteIcon className="w-4 h-4" />
                    </Button>
                    <Button className="text-red-500 hover:bg-red-500 hover:text-white" size="sm" variant="outline">
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dra. Maria Oliveira</TableCell>
                <TableCell>Pediatria</TableCell>
                <TableCell>maria.oliveira@clinica.com</TableCell>
                <TableCell>987654</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <DeleteIcon className="w-4 h-4" />
                    </Button>
                    <Button className="text-red-500 hover:bg-red-500 hover:text-white" size="sm" variant="outline">
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dr. Lucas Almeida</TableCell>
                <TableCell>Ortopedia</TableCell>
                <TableCell>lucas.almeida@clinica.com</TableCell>
                <TableCell>456789</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <DeleteIcon className="w-4 h-4" />
                    </Button>
                    <Button className="text-red-500 hover:bg-red-500 hover:text-white" size="sm" variant="outline">
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-primary-500 hover:bg-primary-600 text-white" size="sm">
            Adicionar Médico
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Adicionar Médico</DialogTitle>
            <DialogDescription>Preencha as informações do novo médico.</DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Digite o nome do médico" />
              </div>
              <div>
                <Label htmlFor="specialty">Especialidade</Label>
                <Input id="specialty" placeholder="Digite a especialidade" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contact">Contato</Label>
                <Input id="contact" placeholder="Digite o contato do médico" />
              </div>
              <div>
                <Label htmlFor="crm">CRM</Label>
                <Input id="crm" placeholder="Digite o CRM do médico" />
              </div>
            </div>
            <div>
              <Label htmlFor="education">Formação Acadêmica</Label>
              <Textarea className="min-h-[100px]" id="education" placeholder="Digite a formação acadêmica do médico" />
            </div>
            <div>
              <Label htmlFor="experience">Experiência</Label>
              <Textarea className="min-h-[100px]" id="experience" placeholder="Digite a experiência do médico" />
            </div>
            <div>
              <Label htmlFor="availability">Disponibilidade de Horários</Label>
              <Textarea
                className="min-h-[100px]"
                id="availability"
                placeholder="Digite a disponibilidade de horários do médico"
              />
            </div>
          </form>
          <DialogFooter>
            <Button className="bg-primary-500 hover:bg-primary-600 text-white" type="submit">
              Salvar
            </Button>
            <div>
              <Button variant="outline">Cancelar</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
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


function ListOrderedIcon(props) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
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