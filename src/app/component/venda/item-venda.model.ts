import { Product } from "../product/product-read/product.model";

export interface ItemVenda {
    ivdId?: number;
    produto: Product;
    quantidade: number;
    precoUnitario: number;
    subTotal: number;
  }