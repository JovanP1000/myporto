export const formatDate = (date, options = {}) => {
    const defaultOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return new Date(date).toLocaleDateString('en-US', { ...defaultOptions, ...options })
}

export const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
}

export const truncate = (text, length = 100) => {
    if (text.length <= length) return text
    return text.substring(0, length) + '...'
}

export const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
        clearTimeout(timeout)
        func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}