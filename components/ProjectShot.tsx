"use client";

import Image from "next/image";
import { useRef } from "react";

type Shot = { src: string; width: number; height: number; alt: string; thumbPos?: string };

/** Small thumbnail that opens the full screenshot in a native dialog. */
export default function ProjectShot({ shot, name }: { shot: Shot; name: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" className="shot-thumb" onClick={() => ref.current?.showModal()} aria-label={`View ${name} screenshot`}>
        <Image src={shot.src} alt="" width={320} height={Math.round((320 * shot.height) / shot.width)} sizes="160px" style={{ objectPosition: shot.thumbPos ?? "top left" }} />
        <span>View screenshot</span>
      </button>
      <dialog
        ref={ref}
        className="shot-dialog"
        aria-label={`${name} screenshot`}
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close();
        }}
      >
        <button type="button" className="shot-close" onClick={() => ref.current?.close()} aria-label="Close">
          ×
        </button>
        <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} sizes="(max-width: 1000px) 96vw, 1100px" />
      </dialog>
    </>
  );
}
