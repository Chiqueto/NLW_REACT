import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps{
    openGuestsModal: ()=> void
    emailsToInvite: string[]
    openConfirmTripModal: () => void
}

export function InviteGuestsStep({
    emailsToInvite,
    openConfirmTripModal,
    openGuestsModal,
}: InviteGuestsStepProps){
    return (
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <button type="button" onClick={openGuestsModal} className='flex items-center gap-2 flex-1'>
              <UserRoundPlus  className="size-5 text-zinc-400"/>
              <span  className="text-lg text-zinc-400 flex-1 text-left"> {emailsToInvite.length == 0 ? "Quem estará na viagem" : emailsToInvite.length + " Pessoa(s) convidada(s)"}</span>
            </button>
            
            
            <div className='w-px h-6 bg-zinc-800'/>
            <button onClick={openConfirmTripModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
              Confirmar viagem
              <ArrowRight className='size-5'/>
            </button>
          </div>
    )
}