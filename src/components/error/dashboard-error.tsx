import { AlertTriangle } from "lucide-react"

export const ConnectionError = () => {
  return (
      <div className="grid place-items-center h-full">
        <div className="flex flex-col items-center justify-center gap-10 p-4 sm:p-10 text-center text-white bg-card rounded-[16px]">
          <div className="flex gap-4 items-center">
            <AlertTriangle className="text-desctructive size-16" />
            <h2 className="text-3xl font-bold">
              Houve um erro ao conectar com o servidor
            </h2>
          </div>
          <p className="text-lg text-description">
            Tente recarregar a página ou verificar se o servidor está rodando e funcional
          </p>
          <button
            className="px-6 py-2 font-semibold text-white transition-colors rounded-lg bg-primary hover:bg-primary/90 cursor-pointer"
            onClick={() => window.location.reload()}
          >
            Recarregar página
          </button>
        </div>
      </div>
  )
}