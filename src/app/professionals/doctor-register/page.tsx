import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function doctorRegisterForm() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Registro de Médicos</h1>
            <p className="text-gray-500 dark:text-gray-400">Cadastre novos médicos no sistema.</p>
          </div>
        </div>
        <div className="border shadow-sm rounded-lg p-6">
          <form>
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
                <Label htmlFor="crm">CRM</Label>
                <Input id="crm" placeholder="Digite o número do CRM" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="specialty">Especialidade</Label>
                <Select id="specialty">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a especialidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="cardiologia">Cardiologia</SelectItem>
                      <SelectItem value="ortopedia">Ortopedia</SelectItem>
                      <SelectItem value="dermatologia">Dermatologia</SelectItem>
                      <SelectItem value="pediatria">Pediatria</SelectItem>
                      <SelectItem value="ginecologia">Ginecologia</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
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
                <Label htmlFor="address">Endereço</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Input id="address-street" placeholder="Logradouro" required />
                  <Input id="address-number" placeholder="Número" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input id="address-complement" placeholder="Complemento" />
                  <Input id="address-neighborhood" placeholder="Bairro" required />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Input id="address-city" placeholder="Cidade" required />
                  <Select id="address-state">
                    <SelectTrigger>
                      <SelectValue placeholder="Estado" />
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
                  <Input id="address-zip" placeholder="CEP" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Celular</Label>
                <Input id="mobile" placeholder="Digite o número do celular" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone Fixo</Label>
                <Input id="phone" placeholder="Digite o número do telefone fixo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Digite o email" required type="email" />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button className="w-full sm:w-auto" type="submit">
                Cadastrar Médico
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}