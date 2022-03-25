const express = require("express");
const router = express.Router();

const codeBlocksCtrl = require("../controllers/codeBlock");

router
  .get("/", codeBlocksCtrl.all)
  .get("/:cbId", codeBlocksCtrl.get)
  .post("/", codeBlocksCtrl.post)
  .delete("/:cbId", codeBlocksCtrl.del)
  .put("/:cbId", codeBlocksCtrl.put);

router.param("cbId", codeBlocksCtrl.param);

module.exports = router;