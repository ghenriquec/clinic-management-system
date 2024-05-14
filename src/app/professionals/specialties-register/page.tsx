import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <>
      <div className="mx-auto max-w-4xl space-y-6 py-12">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Gerenciar Especialidades Médicas</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Adicione, edite e exclua as especialidades médicas disponíveis na clínica.
          </p>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <div className="flex items-center justify-between bg-gray-100 px-4 py-3 dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <Label className="text-sm font-medium" htmlFor="search">
                Pesquisar:
              </Label>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="pl-8 sm:w-[300px] bg-white dark:bg-gray-950"
                  id="search"
                  placeholder="Buscar especialidades..."
                  type="search"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Label className="text-sm font-medium" htmlFor="filter">
                Filtrar:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full" size="icon" variant="outline">
                    <FilterIcon className="h-5 w-5" />
                    <span className="sr-only">Filtrar especialidades</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem>Nome</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Área de Foco</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="ml-auto" size="sm">
                Adicionar Especialidade
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Área de Foco</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Cardiologia</TableCell>
                <TableCell>
                  Especialidade médica que trata de doenças relacionadas ao coração e ao sistema cardiovascular.
                </TableCell>
                <TableCell>Coração, Vasos Sanguíneos</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Ações</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Dermatologia</TableCell>
                <TableCell>Especialidade médica que trata de doenças e condições da pele, cabelos e unhas.</TableCell>
                <TableCell>Pele, Cabelos, Unhas</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Ações</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ortopedia</TableCell>
                <TableCell>
                  Especialidade médica que trata de doenças e lesões relacionadas ao sistema musculoesquelético.
                </TableCell>
                <TableCell>Ossos, Músculos, Articulações</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Ações</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pediatria</TableCell>
                <TableCell>
                  Especialidade médica que trata de doenças e cuidados relacionados a crianças e adolescentes.
                </TableCell>
                <TableCell>Crianças, Adolescentes</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Ações</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Neurologia</TableCell>
                <TableCell>
                  Especialidade médica que trata de doenças e condições relacionadas ao sistema nervoso.
                </TableCell>
                <TableCell>Cérebro, Nervos, Músculos</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Ações</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <Dialog>
        <DialogTrigger>
          <Button className="ml-auto" size="sm">
            Adicionar Especialidade
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Nova Especialidade</DialogTitle>
            <DialogDescription>Preencha os detalhes da nova especialidade médica.</DialogDescription>
          </DialogHeader>
          <form>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Digite o nome da especialidade" type="text" />
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea id="description" placeholder="Descreva a especialidade" />
              </div>
              <div>
                <Label htmlFor="focus-areas">Áreas de Foco</Label>
                <Input id="focus-areas" placeholder="Separe as áreas por vírgula" type="text" />
              </div>
            </div>
            <DialogFooter>
              <Button className="ml-auto" type="submit">
                Salvar
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
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


function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
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