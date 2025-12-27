import Headers from "@/components/header";

export default function Home() {
  return (
    <>
    
    <Headers />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 transition-colors">
      {/* Card */}
      <div className="w-[420px] max-w-full rounded-3xl bg-white dark:bg-gray-900 shadow-xl p-8 text-center transition-colors">
        
        {/* Tabs */}
        <div className="flex justify-center gap-8 text-gray-500 dark:text-gray-400 font-medium mb-8">
          <span className="relative text-gray-900 dark:text-white">
            Início
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-500 rounded-full" />
          </span>
          <span>Aprendizado</span>
          <span>Exercícios</span>
        </div>

        {/* Mascote */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img
              src="/assets/logo/logo.svg"
              alt="Raposa"
              className="w-32 h-32 mx-auto"
            />
            {/* Hiragana あ */}
            <span className="absolute -right-6 top-1/2 -translate-y-1/2 text-6xl font-bold text-black dark:text-white">
              あ
            </span>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-3xl font-extrabold mb-6">
          Hiragana <span className="text-pink-500">&lt;Flow&gt;</span>
        </h1>

        {/* Botão */}
        <button className="w-full py-4 rounded-full text-white text-lg font-semibold 
          bg-gradient-to-r from-indigo-500 to-purple-500 
          hover:opacity-90 transition mb-4">
          Continuar de onde parei
        </button>

        {/* Progresso */}
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
          Você já domina 12/46 caracteres
        </p>

        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-[26%] bg-gradient-to-r from-pink-400 to-pink-500 rounded-full" />
        </div>
      </div>
    </div>
     </>

  );
   
}