import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function OwnerRegistryForm() {
  return (
    <div className="mx-auto max-w-[600px] space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Cadastro de Proprietário</h1>
        <p className="text-gray-500 dark:text-gray-400">Insira as informações do proprietário abaixo.</p>
      </div>
      <Card>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Digite o nome" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cpf-cnpj">CPF/CNPJ</Label>
              <Input id="cpf-cnpj" placeholder="Digite o CPF/CNPJ" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="contact">Contato</Label>
              <Input id="contact" placeholder="Digite o contato" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" placeholder="Digite o endereço" required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="bank-name">Nome do Banco</Label>
              <Input id="bank-name" placeholder="Digite o nome do banco" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bank-account">Número da Conta</Label>
              <Input id="bank-account" placeholder="Digite o número da conta" required />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button variant="outline">Cancelar</Button>
          <Button>Salvar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}