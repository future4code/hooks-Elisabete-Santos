import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
   test("Retorna true se o array possui um ou mais itens repetidos", () => {
      // Preparação
      const array = [1, 2, 1]

      // Execução
      const result = checaItensDuplicados(array)

      // Verificação
      expect(result).toEqual([1, 2, 1])
   })
   test("Retorna true se o array possui um ou mais itens repetidos", () => {
      // Preparação
      const array = [5, 5, 3, 6, 5, 6]

      // Execução
      const result = checaItensDuplicados(array)

      // Verificação
      expect(result).toEqual([5, 5, 3, 6, 5, 6])
   })
   test("O retorno é false somente no caso onde todos os itens do array são distintos", () => {
      // Preparação
      const array = []

      // Execução
      const result = checaItensDuplicados(array)

      // Verificação
      expect(result).toEqual(false)
   })
   test("O retorno é false somente no caso onde todos os itens do array são distintos", () => {
      // Preparação
      const array = [1, 2, 3]

      // Execução
      const result = checaItensDuplicados(array)

      // Verificação
      expect(result).toEqual(false)
   })
});
