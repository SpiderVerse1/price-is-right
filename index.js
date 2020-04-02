const calculateTotal = (items) => items.map(calculatedSubTotals)

const calculatedSubTotals = (items) => {
  items.total = Number((items.price * items.quantity - (items.price * items.quantity * items.discount)).toFixed(2))

  return items
}

module.exports = calculateTotal
