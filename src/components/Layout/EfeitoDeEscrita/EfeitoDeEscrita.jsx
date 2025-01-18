import React from "react";
import { ReactTyped as Typed } from "react-typed";

export default function EfeitoDeEscrita({classe, texto='Olá', mostrarCursor=false, velocidadeEscrita=50}){
  return (
    <Typed
        className={classe}
        strings={[texto]}
        typeSpeed={velocidadeEscrita}
        showCursor={mostrarCursor}
    />
  );
};
