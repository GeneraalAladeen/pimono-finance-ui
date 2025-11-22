export const formatAmount = (amount, options = {}) => {
    const {
        currency = 'TRY',
        locale = 'tr-TR',
        minimumFractionDigits = 2,
        maximumFractionDigits = 2,
    } = options

    if (amount === null || amount === undefined || isNaN(amount)) {
        return ''
    }

    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits,
        maximumFractionDigits,
    }).format(amount)
}
