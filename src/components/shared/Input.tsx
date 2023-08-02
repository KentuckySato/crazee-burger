type Props = {
    icon?: JSX.Element
    name: string
    placeholder: string
    type: string
    value: string | number
    required?: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function Input({ icon, placeholder, name, type, value, required, onChange }: Props) {
    return (
        <div>
            {icon && icon}
            <input
                onChange={onChange}
                value={value}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}