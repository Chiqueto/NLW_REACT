import { MapPin, Calendar, Settings2} from "lucide-react";
import { Button } from "../../components/button";

export function DestinationAndDateHeader() {
  return (
    <div className="h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-400">Florianópolis, Brazil</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-400">17 a 23 de Agosto</span>
        </div>

        <div className="w-px h-6 bg-zinc-800" />
        <Button variant="secondary"> 
            Alterar local/data
            <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
