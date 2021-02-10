//@ts-check
// define our DB requests for product models
import Repo from "./models";

const repos = async () => {
  const products = await Repo.find()
  return products;
};

const repoExists = async (id) => {
  let repo = Repo.exists({ repo_id: id})
  return repo
}
const addRepo = async (payload) => {
  const newProduct = await Repo.create(payload);
  return newProduct;
};

const editProduct = async (id, updateOps) => {
  await Repo.updateOne({repo_id: id}, {$set: updateOps})
  const updatedProduct = await Repo.find({repo_id: id});
  return updatedProduct;
}

export {
    repos, addRepo, repoExists, editProduct,
}
