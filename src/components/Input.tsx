interface InputProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeira?: boolean
    onChange?: (valor: any) => void
    className?: string
}
export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label >
                {props.texto}
            </label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeira}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    px-4 py-2
                    border border-purple-500 rounded-md
                    focus:outline-none
                    bg-gray-100
                    ${props.somenteLeira ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}