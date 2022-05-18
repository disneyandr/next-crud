interface BotaoProps {
    cor?: 'neutral' | 'blue' | 'emeral' | 'green'
    className?: string
    children: any
    onClick?: () => void
}
export default function Botao(props: BotaoProps) {
   
    return (
        <button onClick={props.onClick} className={`
        px-4 py-2 text-yellow-50 rounded-md 
        bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-700
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}