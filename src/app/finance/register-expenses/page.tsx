import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function RegisterExpenses() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Registrar Gastos</h1>
        <form className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="category">
                Categoria
              </label>
              <Select className="w-full" id="category">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="salarios">Salários</SelectItem>
                  <SelectItem value="equipamentos">Equipamentos</SelectItem>
                  <SelectItem value="servicos">Serviços</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="value">
                Valor
              </label>
              <Input className="w-full" id="value" placeholder="Digite o valor" required type="number" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="date">
                Data
              </label>
              <Input className="w-full" id="date" required type="date" />
            </div>
            <div>
              <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="description">
                Descrição
              </label>
              <Textarea
                className="w-full"
                id="description"
                placeholder="Digite uma descrição detalhada do gasto"
                required
                rows="3"
              />
            </div>
          </div>
          <div>
            <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="receipt">
              Anexar Comprovante
            </label>
            <Input className="w-full" id="receipt" type="file" />
          </div>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-600"
            type="submit"
          >
            Registrar Gasto
          </Button>
        </form>
      </div>
    </div>
  )
}