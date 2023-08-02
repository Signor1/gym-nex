type CardProps = {
    className: string
    children: React.ReactNode
}

export const Card = ({ className, children, ...rest }: CardProps) => {
    return (
        <div className={className} {...rest}>
            {children}
        </div>
    )
}
