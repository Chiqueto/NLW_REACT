import { X, Tag, Link2 } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";

interface AddLinkModalProps{
    closeAddNewLink: () => void
    saveNewLink: (event: FormEvent<HTMLFormElement>) => void
}


export function AddLinkModal({
    closeAddNewLink,
    saveNewLink,
}: AddLinkModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-100">
              Cadastrar link
            </h2>
            <button onClick={closeAddNewLink} className="size-5 text-zinc-300">
              <X />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar os links importantes.
          </p>
        </div>

        <form onSubmit={saveNewLink} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="link"
              placeholder="Título do link"
              className="bg-transparent text-lg placeholder-zinc-400 text-zinc-300  00 outline-none flex-1"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2 flex-1">
            <Link2 className="text-zinc-400 size-5" />
            <input
              type="text"
              name="Link_URL"
              placeholder="URL"
              className="bg-transparent text-lg placeholder-zinc-400 text-zinc-300  00 outline-none flex-1"
            />
          </div>

          <Button type="submit" variant="primary" size="full">
            Salvar Link
          </Button>
        </form>
      </div>
    </div>
  );
}
