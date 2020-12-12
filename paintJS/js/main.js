const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".controls__color");
const brushSizeControler = document.querySelector("#brushSize");
const paintingModes = document.querySelectorAll(".paitingMode");
const printingBtnMode = document.querySelector("#printingMode");
const fillingBtnMode = document.querySelector("#fillingMode");
const btnSavePic = document.querySelector("#btnSavePic");

let painting = false;
let mode = "painting";

const stopPainting = () => {
  painting = false;
};
const startPainting = e => {
  painting = true;
};

const onMouseMove = e => {
  const x = e.offsetX;
  const y = e.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

if (canvas) {
  canvas.width = document.documentElement.clientWidth; // TODO: Resize
  canvas.height = 600; // TODO responsive
  ctx.lineWidth = brushSizeControler.value;
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("contextmenu", e => {
    e.preventDefault();
  });
}

const onChangeColor = e => {
  const color = e.target.style.backgroundColor;
  console.log(color);
  ctx.strokeStyle = color;
  if (mode === "filling") {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, 600);
  }
};

colors.forEach(color => {
  color.addEventListener("click", onChangeColor);
});

const onChangeBrushSize = e => {
  ctx.lineWidth = e.target.value;
};

brushSizeControler.addEventListener("change", onChangeBrushSize);

const onChangeMode = e => {
  mode = e.target.dataset.mode;
  paintingModes.forEach(mode => {
    mode.classList.remove("active");
  });
  e.target.classList.add("active");
};

fillingBtnMode.addEventListener("click", onChangeMode);

printingBtnMode.addEventListener("click", onChangeMode);

const onBtnSavePicture = () => {
  const link = document.createElement("a");
  link.href = canvas.toDataURL();
  link.download = "PaintJS";
  link.click();
};

btnSavePic.addEventListener("click", onBtnSavePicture);
