import prisma from "../../db/index.js";
import capitalizeWord from "../../utils/capitalizeWord.js";

const findAllCategory = async () => {
  const category = await prisma.category.findMany();

  return category;
};

const findCategoryById = async (categoryId) => {
  const category = await prisma.category.findUnique({
    where: {
      id: categoryId,
    },
  });

  return category;
};

const insertCategory = async (categoryData) => {
  const category = await prisma.category.create({
    data: {
      name: capitalizeWord(categoryData.name),
      description: categoryData.description,
    },
  });

  return category;
};

const editCategory = async (categoryId, categoryData) => {
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
};

const deleteCategory = async (categoryId) => {
  await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });
};

export {
  findAllCategory,
  findCategoryById,
  insertCategory,
  editCategory,
  deleteCategory,
};
