const imgPlace = document.getElementById("imgs");
const count = 21

for (let index = 0; index < 21; index++) {
    imgPlace.innerHTML += `
        <div class="flex flex-wrap">
              <div class="w-full p-1 md:p-2">
                  <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                      src="./imgs/${index + 1}.webp">
              </div>
          </div>
    `
}
