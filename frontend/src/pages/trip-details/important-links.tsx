import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent, useState } from "react";
import { AddLinkModal } from "./add-link-modal";

export function ImportantLinks() {
  const [isAddNewLinkOpen, setAddNewLinkOpen] = useState(false)

  function openAddNewLink(){
    setAddNewLinkOpen(true)
  }

  function closeAddNewLink(){
    setAddNewLinkOpen(false)
  }

  function saveNewLink(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    closeAddNewLink()
  }

  return (
    <div className="space-y-6">
      <h2 className="font-semi-bold text-xl">Links Importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block font-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700052352352312353456516516518
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block font-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700052352352312353456516516518
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>
      
      <Button onClick={openAddNewLink} variant="secondary" size="full">
        <Plus className="size-5" /> 
        Cadastrar novo link
      </Button>

      {isAddNewLinkOpen && (
      <AddLinkModal 
      closeAddNewLink={closeAddNewLink}
      saveNewLink={saveNewLink}
      />
    )}
    </div>

    


  );
}
