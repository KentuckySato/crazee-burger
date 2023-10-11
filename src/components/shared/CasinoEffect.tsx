
type CasinoEffectProps = {
    count: string
    className?: string
}

export default function CasinoEffect({ count, className }: CasinoEffectProps) {
    return (
        <span className={className}>{count}</span>
    )
}
