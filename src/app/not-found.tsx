import Link from "next/link";
import Button from "./components/Button";


export default function NotFount() {
    return (
        <div className="bg-light-10">
            <div className="w-full h-[100vh] flex flex-col justify-center items-center space-y-4">
                <h1 className="text-5xl">404</h1>
                <p className="text-2xl">Página não encontrada!</p>
                <Link href="/">
                    <Button text={"Ir para a Página Inicial"}/>
                </Link>
            </div>
    </div>
    )
}