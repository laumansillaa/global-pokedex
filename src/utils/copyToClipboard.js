export const copyToClipboard = (value) => {
    return navigator.clipboard.writeText(value).then(() => {
        console.log('Content copied to clipboard')
        return true
    }, () => {
        console.log('Content not copied to clipboard')
    })
}