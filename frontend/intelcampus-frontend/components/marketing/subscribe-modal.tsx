"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
    open: boolean;
    message: string;
    onClose: () => void;
}

export function SubscribeModal({ open, message, onClose }: Props) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Subscription Successful</DialogTitle>
                </DialogHeader>

                <p className="text-sm text-muted-foreground">{message}</p>

                <div className="pt-4">
                    <Button className="w-full" onClick={onClose}>
                        Continue
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}