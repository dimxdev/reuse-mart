import prisma from "../../db/index.js";
import capitalizeWord from "../../utils/capitalizeWord.js";

class CategoryRepository {
  async findAllCategory() {
    const category = await prisma.category.findMany({
      include: {
        products: true,
      },
    });

    return category;
  }

  async findCategoryById(categoryId) {
    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });

    return category;
  }

  async insertCategory(categoryData) {
    const category = await prisma.category.create({
      data: {
        name: capitalizeWord(categoryData.name),
        description: categoryData.description,
      },
    });

    return category;
  }

  async editCategory(categoryId, categoryData) {
    const category = await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        name: capitalizeWord(categoryData.name),
        description: categoryData.description,
      },
    });

    return category;
  }

  async deleteCategory(categoryId) {
    await prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
  }
}

export default new CategoryRepository();
