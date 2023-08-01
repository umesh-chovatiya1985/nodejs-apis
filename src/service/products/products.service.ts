import { products } from "../../entity/productCollection";
import { baseProducts, product } from "../../entity/products";

let items: products = {
    1: {
        id: 1,
        title: "레이블라우스",
        description: "test",
        discount: 10,
        price: 57600,
        coverImage: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
      id: 2,
      title: "레이블라우스",
      price: 57600,
      discount: 9,
      description: "Cheesy",
      coverImage: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
      id: 3,
      title: "레이블라우스",
      price: 57600,
      discount: 9,
      description: "Informative",
      coverImage: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    },
    4: {
        "id": 4,
        "title": "레이블라우스",
        "price": 57600,
        "discount": 9,
        "description": "Tasty",
        "coverImage": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
      },
    5: {
        "id": 5,
        "title": "레이블라우스",
        "price": 57600,
        "discount": 9,
        "description": "Tasty",
        "coverImage": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
      },
    6: {
        "id": 6,
        "title": "레이블라우스",
        "price": 57600,
        "discount": 9,
        "description": "Tasty",
        "coverImage": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
      },
    7: {
        "id": 7,
        "title": "Burger 3",
        "price": 57600,
        "discount": 9,
        "description": "Tasty",
        "coverImage": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
      },
    8: {
        "id": 8,
        "title": "Burger 4",
        "price": 57600,
        "discount": 9,
        "description": "Tasty",
        "coverImage": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
      },
    9: {
        "id": 9,
        "title": "Burger 5",
        "price": 57600,
        "discount": 9,
        "description": "Tasty",
        "coverImage": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
      },
    10: {
        "id": 10,
        "title": "Burger 6",
        "price": 57600,
        "discount": 9,
        "description": "Tasty",
        "coverImage": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
      },
    11: {
        "id": 11,
        "title": "Burger 7",
        "price": 57600,
        "discount": 9,
        "description": "Tasty",
        "coverImage": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
      },
    12: {
        "id": 12,
        "title": "Burger 8",
        "price": 57600,
        "discount": 9,
        "description": "Tasty",
        "coverImage": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
      },
    13: {
        "id": 13,
        "title": "Burger 9",
        "price": 57600,
        "discount": 9,
        "description": "Tasty",
        "coverImage": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
      },
    14: {
        "id": 14,
        "title": "Burger 10",
        "price": 57600,
        "discount": 9,
        "description": "Tasty",
        "coverImage": "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    }
};

export const findAll = async (): Promise<products[]> => Object.values(items);

export const find = async (id: number): Promise<product> => items[id];

export const findByPage = async (pageNo: number, Limit: number): Promise<products[]> => {
    const products = Object.values(items);
    const limitedProducts = products.splice((pageNo*Limit), Limit);
    return limitedProducts;
};

export const create = async (newItem: baseProducts): Promise<product> => {
  const id = new Date().valueOf();
  items[id] = {
    id,
    ...newItem,
  };
  return items[id];
};

export const update = async (
    id: number,
    itemUpdate: baseProducts
  ): Promise<product | null> => {
    const item = await find(id);  
    if (!item) {
      return null;
    }  
    items[id] = { id, ...itemUpdate };  
    return items[id];
};

export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);  
    if (!item) {
      return null;
    }  
    delete items[id];
};