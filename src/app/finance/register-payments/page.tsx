import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function RegisterPayments() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Registrar Pagamentos de Pacientes</h1>
        <form className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="patient">
                Paciente
              </label>
              <Select className="w-full" id="patient">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um paciente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john-doe">John Doe</SelectItem>
                  <SelectItem value="jane-smith">Jane Smith</SelectItem>
                  <SelectItem value="bob-johnson">Bob Johnson</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="value">
                Valor Pago
              </label>
              <Input className="w-full" id="value" placeholder="Digite o valor pago" required type="number" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="date">
                Data do Pagamento
              </label>
              <Input className="w-full" id="date" required type="date" />
            </div>
            <div>
              <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="service">
                Serviço
              </label>
              <Select className="w-full" id="service">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consulta">Consulta</SelectItem>
                  <SelectItem value="exame">Exame</SelectItem>
                  <SelectItem value="procedimento">Procedimento</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="receipt">
              Anexar Comprovante
            </label>
            <Input className="w-full" id="receipt" type="file" />
          </div>
          <div>
            <label className="block mb-3 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="invoice">
              Vincular a Fatura
            </label>
            <Select className="w-full" id="invoice">
              <SelectTrigger>
                <SelectValue placeholder="Selecione a fatura" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="invoice-001">Fatura 001</SelectItem>
                <SelectItem value="invoice-002">Fatura 002</SelectItem>
                <SelectItem value="invoice-003">Fatura 003</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-600"
            type="submit"
          >
            Registrar Pagamento
          </Button>
        </form>
      </div>
    </div>
  )
}