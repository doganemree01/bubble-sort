const form = document.querySelector(".form")

form.addEventListener("submit", getNumbers)

function getNumbers(e){
    e.preventDefault();

    const input = document.querySelector(".input").value

    const usetInput = input.split(",").map(Number)

    const lenght= usetInput.length


    for(let a =0; a < lenght - 1; a++){
        for(let b=0; b< lenght - a -1; b++){
            if(usetInput[b] > usetInput[b+1]){
                // swap
                const temp = usetInput[b]
                usetInput[b] = usetInput[b+1]
                usetInput[b+1] = temp
            }
        }
    }

    const p = document.querySelector(".p")
    p.innerHTML= usetInput.join(", ")

}