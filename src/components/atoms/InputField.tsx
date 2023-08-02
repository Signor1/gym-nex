type InputFieldProps = {
    className: string
    children: React.ReactNode
}

export const InputField = ({ className, children }: InputFieldProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
