const calculateTimeDifference = (time) => {
    const givenTime = new Date(time)
    const now = new Date()
    const diff = (now - givenTime) / 1000

    if (diff < 3600) {
        return `${Math.floor(diff / 60)}m`
    } else if (diff < 24 * 3600) {
        return `${Math.floor(diff / 3600)}h`
    } else {
        return `${Math.floor(diff / (24 * 3600))}d`
    }
}

export default calculateTimeDifference
