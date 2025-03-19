import React, { useState, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ModalProps {
  videoSrc: string;
  image: string;
}

const Modal: React.FC<ModalProps> = ({ videoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // モーダルの開閉時に動画を制御
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open && videoRef.current) {
      videoRef.current.pause(); // モーダルを閉じたら動画を停止
      videoRef.current.currentTime = 0; // 動画をリセット
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Trigger className="c-modal__thumbnail" asChild>
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={`c-modal ${isOpen ? "fade-in" : "fade-out"}`}>
          <Dialog.Content className={`c-modal__contents ${isOpen ? "fade-in" : "fade-out"}`}>
            <Dialog.Close className="c-modal__close-btn"></Dialog.Close>
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              muted
            />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
