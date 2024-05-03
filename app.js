const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let data = {};

app.get("/alldata", (req, res) => {
  res.json(data);
});

app.get("/getName", (req, res) => {
  const phoneNumber = req.query.phoneNumber;
  const name = data[phoneNumber];
  if (name) {
    res.json({ phoneNumber: phoneNumber, name: name });
  } else {
    res.status(404).send("Không tìm thấy số điện thoại này trong dữ liệu.");
  }
});

app.post("/postname", (req, res) => {
  const { phoneNumber, name } = req.body;
  if (!phoneNumber || !name) {
    res.status(400).send("Thiếu thông tin số điện thoại hoặc tên.");
  } else {
    data[phoneNumber] = name;
    res.send({
      test: `Đã lưu số điện thoại ${phoneNumber} với tên ${name} thành công.`,
    });
  }
});

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});

// bài tập : cài đặt progres và tạo thử 1 table
