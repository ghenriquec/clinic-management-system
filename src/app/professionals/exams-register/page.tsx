import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function ExamsRegistryForm() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Cadastro de Exames Médicos</h1>
        <p className="text-gray-500 dark:text-gray-400">Preencha as informações do novo exame médico.</p>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nome do Exame</Label>
            <Input id="name" placeholder="Ex: Raio-X, Ressonância Magnética" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cost">Custo</Label>
            <Input id="cost" placeholder="Valor do exame" required type="number" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Descrição</Label>
          <Textarea className="min-h-[100px]" id="description" placeholder="Detalhes sobre o exame" required />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="duration">Duração Estimada</Label>
            <Input id="duration" required type="time" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="specialty">Especialidade Associada</Label>
            <Select id="specialty">
              <SelectTrigger>
                <SelectValue placeholder="Selecione a especialidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="cardiology">Cardiologia</SelectItem>
                  <SelectItem value="radiology">Radiologia</SelectItem>
                  <SelectItem value="orthopedics">Ortopedia</SelectItem>
                  <SelectItem value="neurology">Neurologia</SelectItem>
                  <SelectItem value="gynecology">Ginecologia</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Cancelar</Button>
          <Button type="submit">Salvar</Button>
        </div>
      </form>
    </div>
  )
}