import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void,
}

export function CreateActivityModal({
  closeCreateActivityModal
}: CreateActivityModalProps) {
  const { tripId } = useParams<{ tripId: string }>()

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const title = data.get('title')?.toString()
    const occurs_at = data.get('occurs_at')?.toString()

    if (!title || !occurs_at) {
      console.error('Title or occurs_at is missing')
      return
    }

    console.log(`${title} e ${occurs_at}`)

    try {
      await api.post(`/trips/${tripId}/activities`, {
        title,
        occurs_at,
      })
      console.log('Activity created successfully')
      closeCreateActivityModal()
    } catch (error) {
      console.error('Error creating activity:', error)
    }


    window.document.location.reload() // para recarregar a página
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-100">
              Cadastrar atividade
            </h2>
            <button
              onClick={closeCreateActivityModal}
              className="size-5 text-zinc-300"
            >
              <X />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form onSubmit={createActivity} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 text-zinc-300  00 outline-none flex-1"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-1">
            <Calendar className="text-zinc-400 size-5" />
            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
              className="bg-transparent text-lg placeholder-zinc-400 text-zinc-300  00 outline-none flex-1"
            />
          </div>

          <Button variant="primary" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
