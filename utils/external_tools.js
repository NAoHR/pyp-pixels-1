export const parse_money = (value) =>{
    return `Rp. ${String(value).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`
}