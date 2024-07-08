const Pet = require("../models/pet");

const express = require("express");
const router = express.Router();

// create
router.post("/", async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json(pet); // 201: Created
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// index
router.get("/", async (req, res) => {
  try {
    const pets = await Pet.find({});
    res.json(pets);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.json(pet);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    // Add query to update a single pet
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!pet) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.status(pet);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// destroy
router.delete("/:id", async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pay) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.json(pet);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
