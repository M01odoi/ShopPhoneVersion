import categories from "../mocData/categories";
import { ICategory } from "../interfaces/ICategory";

const category: Promise<ICategory[]> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(categories);
  }, 1000);
});

export default category;
