import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export default function PatientRegisterForm() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Registro de Pacientes</h1>
            <p className="text-gray-500 dark:text-gray-400">Cadastre novos pacientes no sistema.</p>
          </div>
        </div>
        <div className="border shadow-sm rounded-lg p-6">
          <form>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium mb-4">Informações Pessoais</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Nome</Label>
                    <Input id="first-name" placeholder="Digite o nome" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Sobrenome</Label>
                    <Input id="last-name" placeholder="Digite o sobrenome" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" placeholder="Digite o número do CPF" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birth-date">Data de Nascimento</Label>
                    <Input id="birth-date" required type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gênero</Label>
                    <Select defaultValue="male" id="gender">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o gênero" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="male">Masculino</SelectItem>
                          <SelectItem value="female">Feminino</SelectItem>
                          <SelectItem value="other">Outro</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Número de Contato Principal</Label>
                    <Input id="mobile" placeholder="Digite o número do celular" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Digite o email" required type="email" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-4">Endereço</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="address-street">Logradouro</Label>
                    <Input id="address-street" placeholder="Digite o logradouro" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address-number">Número</Label>
                    <Input id="address-number" placeholder="Digite o número" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address-complement">Complemento</Label>
                    <Input id="address-complement" placeholder="Digite o complemento" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address-neighborhood">Bairro</Label>
                    <Input id="address-neighborhood" placeholder="Digite o bairro" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address-zip">CEP</Label>
                    <Input id="address-zip" placeholder="Digite o CEP" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address-city">Cidade</Label>
                    <Input id="address-city" placeholder="Digite a cidade" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address-state">Estado</Label>
                    <Select id="address-state">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="ac">Acre</SelectItem>
                          <SelectItem value="al">Alagoas</SelectItem>
                          <SelectItem value="ap">Amapá</SelectItem>
                          <SelectItem value="am">Amazonas</SelectItem>
                          <SelectItem value="ba">Bahia</SelectItem>
                          <SelectItem value="ce">Ceará</SelectItem>
                          <SelectItem value="df">Distrito Federal</SelectItem>
                          <SelectItem value="es">Espírito Santo</SelectItem>
                          <SelectItem value="go">Goiás</SelectItem>
                          <SelectItem value="ma">Maranhão</SelectItem>
                          <SelectItem value="mt">Mato Grosso</SelectItem>
                          <SelectItem value="ms">Mato Grosso do Sul</SelectItem>
                          <SelectItem value="mg">Minas Gerais</SelectItem>
                          <SelectItem value="pa">Pará</SelectItem>
                          <SelectItem value="pb">Paraíba</SelectItem>
                          <SelectItem value="pr">Paraná</SelectItem>
                          <SelectItem value="pe">Pernambuco</SelectItem>
                          <SelectItem value="pi">Piauí</SelectItem>
                          <SelectItem value="rj">Rio de Janeiro</SelectItem>
                          <SelectItem value="rn">Rio Grande do Norte</SelectItem>
                          <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                          <SelectItem value="ro">Rondônia</SelectItem>
                          <SelectItem value="rr">Roraima</SelectItem>
                          <SelectItem value="sc">Santa Catarina</SelectItem>
                          <SelectItem value="sp">São Paulo</SelectItem>
                          <SelectItem value="se">Sergipe</SelectItem>
                          <SelectItem value="to">Tocantins</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-medium mb-4">Contato de Emergência</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Informações de uma pessoa para ser contactada em caso de emergência.
                </p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full" variant="outline">
                      Adicionar Contato de Emergência
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="emergency-contact-name">Nome do Contato de Emergência</Label>
                        <Input id="emergency-contact-name" placeholder="Digite o nome completo" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergency-contact-relation">Relação com o Paciente</Label>
                        <Select id="emergency-contact-relation">
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a relação" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="spouse">Cônjuge</SelectItem>
                              <SelectItem value="parent">Pai/Mãe</SelectItem>
                              <SelectItem value="sibling">Irmão/Irmã</SelectItem>
                              <SelectItem value="friend">Amigo</SelectItem>
                              <SelectItem value="other">Outro</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergency-contact-phone">Telefone de Emergência</Label>
                        <Input id="emergency-contact-phone" placeholder="Digite o número de telefone" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergency-contact-email">Email de Emergência (opcional)</Label>
                        <Input id="emergency-contact-email" placeholder="Digite o email" type="email" />
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Button className="w-full" type="submit">
                          Cadastrar Paciente
                        </Button>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}