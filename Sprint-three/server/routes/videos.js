const express = require("express");
const router = express.Router();
const fs = require("fs");
const videoData =
  "/Users/jeffharr/Desktop/jeffrey-harr-brainflix/Sprint-three/server/data/video-details.json";
const videoList = require(videoData);
const { v4: uuidv4 } = require("uuid");
const coolImages = require("cool-images");
router.use(express.json());

router.get("/", (req, res) => {
  fs.readFile(
    "/Users/jeffharr/Desktop/jeffrey-harr-brainflix/Sprint-three/server/data/video-details.json",
    "utf8",
    (err, data) => {
      if (err) console.log(err);
      let videos = JSON.parse(data);
      res.json(videos);
    }
  );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile(
    "/Users/jeffharr/Desktop/jeffrey-harr-brainflix/Sprint-three/server/data/video-details.json",
    "utf8",
    (err, data) => {
      let videoDetails = JSON.parse(data);

      videoDetails = videoDetails.find((video) => video.id == id);

      if (err) console.log(err);

      res.json(videoDetails);
    }
  );
});

router.post("/", (req, res) => {
  const { title, description } = req.body;
  const dateObj = new Date();
  const displayDate = dateObj.toLocaleString("en-us", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const newVideo = {
    id: uuidv4(),
    title,
    channel: "The New Channel",
    description,
    views: 0,
    likes: 0,
    image: coolImages.one(),
    timestamp: displayDate,
    duration: "",
    video: "",
    Comments: [],
  };
  videoList.push(newVideo);
  fs.writeFile(videoData, JSON.stringify(videoList), "utf8", (err) => {
    if (err) {
    }
  });
});

module.exports = router;
