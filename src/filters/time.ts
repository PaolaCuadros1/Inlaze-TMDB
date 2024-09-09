export const minutesToStringTime = (val: number): string => {
    const hours = Math.floor(val / 60)

    if (hours > 0) {
        const minutes = Math.floor(val % 60)
        return `${hours}h ${minutes}min.`
    }

    return `${val}min.`
}