
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"

export default function Component() {
  return (
    <>
      <div className="mx-auto max-w-md space-y-6 py-12">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Feedback da Clínica</h1>
          <p className="text-gray-500 dark:text-gray-400">Nos ajude a melhorar nossos serviços. Envie seu feedback.</p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="rating">
                Avaliação
              </label>
              <Select defaultValue="4" id="rating">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a avaliação" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 - Excelente</SelectItem>
                  <SelectItem value="4">4 - Muito Bom</SelectItem>
                  <SelectItem value="3">3 - Bom</SelectItem>
                  <SelectItem value="2">2 - Ruim</SelectItem>
                  <SelectItem value="1">1 - Muito Ruim</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="category">
                Categoria
              </label>
              <Select defaultValue="atendimento" id="category">
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="atendimento">Atendimento</SelectItem>
                  <SelectItem value="instalacoes">Instalações</SelectItem>
                  <SelectItem value="profissionais">Profissionais</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="comment">
              Comentário
            </label>
            <Textarea className="min-h-[100px]" id="comment" placeholder="Escreva seu feedback aqui..." />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Cancelar</Button>
            <Button>Enviar Feedback</Button>
          </div>
        </form>
      </div>
      <Dialog>
        <DialogTrigger />
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Feedback Recebido</DialogTitle>
            <DialogDescription>
              Obrigado por compartilhar seu feedback. Ele será muito útil para melhorarmos nossos serviços.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}