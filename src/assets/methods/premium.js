export default function (price, age) {
    return price.multiplier * (age || 0)
}