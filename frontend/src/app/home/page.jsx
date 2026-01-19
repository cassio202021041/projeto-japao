import ButtonRoxo from "@/components/button/button";
import Headers from "@/components/header";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 transition-colors">
      {/* Card */}
      <div className="w-[420px] max-w-full rounded-3xl bg-white dark:bg-gray-900 shadow-xl p-8 text-center transition-colors">
        {/* Mascote */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/assets/logo/logo.svg"
              alt="Raposa"
              className="w-50 h-50 mx-auto"
            />           
          </div>
        </div>

        {/* Título */}
        <h1 className="text-3xl font-extrabold mb-6">
          Hiragana Flow
        </h1>

        {/* Botão */}
        <ButtonRoxo>
          Continuar Aprendizado
        </ButtonRoxo>

        {/* Progresso */}
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
          Você já domina 12/46 caracteres
        </p>

        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-[26%] bg-gradient-to-r from-pink-400 to-pink-500 rounded-full" />
        </div>
      </div>
    </div>
  );
   
}