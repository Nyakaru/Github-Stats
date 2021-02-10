//@ts-check
// methods for routes

import { repos, addRepo, repoExists, editProduct } from "./db";

/**
 *
 * @param {*} req
 * @param {*} res
 */
const createRepo = async (req, res) => {
  console.log(req.body);
  try {
    let payload = {
      name: req.body.name,
      repo_id: req.body.repo_id,
      owner: req.body.owner,
      description: req.body.description,
      stars: req.body.stars,
    };
    const exists = await repoExists(payload?.repo_id);

    if (exists) {
      res.status(400).json({
        error: "already bookmarked",
        status: false,
      });
    }

    let product = await addRepo({
      ...payload,
    });

    res.status(200).json({
      status: true,
      data: product,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err,
      status: false,
    });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getRepos = async (req, res) => {
  try {
    let data = await repos();
    let filterData = data.filter( item => (item?.bookmarked === true ))

    res.status(200).json({
      status: true,
      data: filterData,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err,
      status: false,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let updateOps = {};
    for (const [key, value] of Object.entries(req.body)) {
      updateOps[key] = value;
    }
    let productDetails = await editProduct(id, updateOps);
    res.status(200).json({
      status: true,
      data: productDetails,
    });
  } catch (err) {
    console.log(err)
    res.status(400).json({
      status: false,
      error: err,
    });
  }
};

export { createRepo, getRepos, updateProduct };
