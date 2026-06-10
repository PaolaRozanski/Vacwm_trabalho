import products from '../data/products.js'
const carrinho = []
function addCarrinho(idFone, quantidade) {
  const fone = products.find((p) => p.id === idFone)
  if (fone) {
    const itemExistente = carrinho.find((item) => item.id === idFone)
    if (itemExistente) {
      itemExistente.quantidade += quantidade
      itemExistente.precoTotal = itemExistente.quantidade * fone.preco
    } else {
      carrinho.push({
        ...fone,
        quantidade,
        precoTotal: quantidade * fone.preco,
      })
    }
  }
}

export { carrinho, addCarrinho }
