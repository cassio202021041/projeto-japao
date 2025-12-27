export default function Header() {
    return (
        <header className="w-full bg-background text-foreground px-6 py-4 shadow-md">
            <div className="flex flex-row items-center justify-center gap-24 w-full max-w-5xl mx-auto">
                <h1 className="text-xl md:text-2xl font-bold hover:text-primary transition-colors cursor-pointer mx-6">INICIO</h1>
                <h1 className="text-xl md:text-2xl font-bold hover:text-primary transition-colors cursor-pointer mx-6">APRENDIZADO</h1>
                <h1 className="text-xl md:text-2xl font-bold hover:text-primary transition-colors cursor-pointer mx-6">EXERCICIO</h1>
            </div>
        </header>
    );
}
