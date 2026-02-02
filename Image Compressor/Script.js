const fileInput = document.getElementById("fileInput");
const targetSizeInput = document.getElementById("targetSize");
const maxWidthInput = document.getElementById("maxWidth");

const compressBtn = document.getElementById("compressBtn");
const result = document.getElementById("result");

const before = document.getElementById("before");
const after = document.getElementById("after");
const downloadBtn = document.getElementById("downloadBtn");

let compressedBlob = null;


/* Convert bytes → KB */
function toKB(size){
    return (size / 1024).toFixed(2);
}


/* MAIN COMPRESSION */
compressBtn.addEventListener("click", async () => {

    const file = fileInput.files[0];
    if(!file){
        alert("Please select an image first");
        return;
    }

    const targetKB = parseFloat(targetSizeInput.value);
    const maxWidth = parseInt(maxWidthInput.value);

    before.src = URL.createObjectURL(file);

    const img = await createImageBitmap(file);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    let width = img.width;
    let height = img.height;

    /* Resize logic */
    if(maxWidth && width > maxWidth){
        const ratio = maxWidth / width;
        width = maxWidth;
        height = height * ratio;
    }

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(img,0,0,width,height);

    let quality = 0.9;
    let blob;

    /* Reduce quality until target reached */
    do{
        blob = await new Promise(resolve =>
            canvas.toBlob(resolve, "image/jpeg", quality)
        );

        quality -= 0.05;

    } while(targetKB && blob.size/1024 > targetKB && quality > 0.05);

    compressedBlob = blob;

    after.src = URL.createObjectURL(blob);

    result.innerHTML =
        `Before: ${toKB(file.size)} KB <br>
         After: ${toKB(blob.size)} KB <br>
         Quality used: ${quality.toFixed(2)}`;

    downloadBtn.classList.remove("hidden");
});


/* Download */
downloadBtn.addEventListener("click", () => {

    const a = document.createElement("a");
    a.href = URL.createObjectURL(compressedBlob);
    a.download = "compressed.jpg";
    a.click();
});
