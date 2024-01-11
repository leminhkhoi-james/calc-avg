function calcAvg() {
  const avgElement1 = document.getElementById("Toán");
  const avgElement2 = document.getElementById("Văn");
  const avgElement3 = document.getElementById("Anh");
  const avgElement4 = document.getElementById("Lý");
  const avgElement5 = document.getElementById("Hóa");
  const avgElement6 = document.getElementById("Sinh");
  const avgElement7 = document.getElementById("Sử");
  const avgElement8 = document.getElementById("Địa");
  const avgElement9 = document.getElementById("GDCD");

  const avg =
    (Number(avgElement1.value) +
      Number(avgElement2.value) +
      Number(avgElement3.value) +
      Number(avgElement4.value) +
      Number(avgElement5.value) +
      Number(avgElement6.value) +
      Number(avgElement7.value) +
      Number(avgElement8.value) +
      Number(avgElement9.value)) /
    9;
  alert("avg của bạn là " + avg);
}
