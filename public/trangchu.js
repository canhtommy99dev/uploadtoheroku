var socket = io("http://localhost:3000/");

socket.on("server-gui-ds", function (data) {
  data.map(function (hocvien, index) {
    $("#ds").append(
      `
    <div class="hocvien">
    <div class="hang1"> ` +
        index +
        ` || <span> ` +
        hocvien.HOVATEN +
        `</span></div>
    <div class="hang2">` +
        hocvien.EMAIL +
        `- ` +
        hocvien.DIENTHOAI +
        `</div>
  </div>
    `
    );
  });
});

$(document).ready(function () {
  $("#btnSendMessenger").click(function () {
    socket.emit("hocvien-gui-thongtin", {
      hovaten: $("#txtHoVaTen").val(),
      email: $("#txtEmail").val(),
      dienthoai: $("#txtSDT").val(),
    });
  });
});
