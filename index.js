var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var mang = [];

io.on("connection", function (socket) {
  console.log("User connect server " + socket.id);
  socket.on("hocvien-gui-thongtin", function (data) {
    mang.push(new HocVien(data.hovaten, data.email, data.dienthoai));
    console.log(data.hovaten);
    console.log(data.email);
    console.log(data.dienthoai);
    io.sockets.emit("server-gui-ds", mang);
  });
});

function HocVien(hovaten, email, dienthoai) {
  this.HOVATEN = hovaten;
  this.EMAIL = email;
  this.DIENTHOAI = dienthoai;
}

app.get("/", function (req, res) {
  res.render("trangchu");
});
