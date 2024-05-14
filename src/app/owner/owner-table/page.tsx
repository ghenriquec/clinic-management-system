
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function OwnerTable() {
  return (
    <div className="mx-auto max-w-[1000px] space-y-8 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Proprietários</h1>
        <p className="text-gray-500 dark:text-gray-400">Lista de proprietários cadastrados.</p>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>CPF/CNPJ</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Endereço</TableHead>
              <TableHead>Banco</TableHead>
              <TableHead>Conta</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>123.456.789-00</TableCell>
              <TableCell>(11) 98765-4321</TableCell>
              <TableCell>Rua Exemplo, 123</TableCell>
              <TableCell>Banco do Brasil</TableCell>
              <TableCell>12345-6</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button className="bg-white hover:bg-gray-100 text-gray-900 shadow" size="sm" variant="outline">
                    <DeleteIcon className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                  <Button
                    className="bg-white hover:bg-gray-100 text-gray-900 shadow"
                    color="red"
                    size="sm"
                    variant="outline"
                  >
                    <TrashIcon className="w-4 h-4 mr-2" />
                    Deletar
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>987.654.321-00</TableCell>
              <TableCell>(22) 87654-3210</TableCell>
              <TableCell>Avenida Exemplo, 456</TableCell>
              <TableCell>Itaú</TableCell>
              <TableCell>54321-0</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button className="bg-white hover:bg-gray-100 text-gray-900 shadow" size="sm" variant="outline">
                    <DeleteIcon className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                  <Button
                    className="bg-white hover:bg-gray-100 text-gray-900 shadow"
                    color="red"
                    size="sm"
                    variant="outline"
                  >
                    <TrashIcon className="w-4 h-4 mr-2" />
                    Deletar
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Bob Johnson</TableCell>
              <TableCell>456.789.123-00</TableCell>
              <TableCell>(33) 12345-6789</TableCell>
              <TableCell>Rua Exemplo, 789</TableCell>
              <TableCell>Bradesco</TableCell>
              <TableCell>09876-5</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button className="bg-white hover:bg-gray-100 text-gray-900 shadow" size="sm" variant="outline">
                    <DeleteIcon className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                  <Button
                    className="bg-white hover:bg-gray-100 text-gray-900 shadow"
                    color="red"
                    size="sm"
                    variant="outline"
                  >
                    <TrashIcon className="w-4 h-4 mr-2" />
                    Deletar
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