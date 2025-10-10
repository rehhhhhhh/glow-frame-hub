import { useState, useEffect } from "react";
import { MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function CursorToggle() {
  const [customCursor, setCustomCursor] = useState(true);

  useEffect(() => {
    if (customCursor) {
      document.body.classList.remove("custom-cursor-disabled");
    } else {
      document.body.classList.add("custom-cursor-disabled");
    }
  }, [customCursor]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCustomCursor(!customCursor)}
          className="rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20"
        >
          <MousePointer2 className={`h-5 w-5 ${customCursor ? "text-primary" : "text-muted-foreground"}`} />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{customCursor ? "Disable" : "Enable"} Custom Cursor</p>
      </TooltipContent>
    </Tooltip>
  );
}
