const createLink = (rel, href, integrity, crossOrigin, appendTo) => {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    link.integrity = integrity;
    link.crossOrigin = crossOrigin;
    appendTo.append(link);
}

class RichTextEditor {
    constructor() {
        createLink("stylesheet", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css", "sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==", "anonymous", document.head)
        this.__init__()
    }

    controllAction(button) {
        const cmd = button.dataset.cmd
        if(cmd === "insertImage" || cmd === "createLink"){
            const url = window.prompt("inster Link: ", "")
            document.execCommand(cmd, false, url)
        } else if(cmd === "formatBlock"){
            document.execCommand(cmd, false, `<${button.dataset.element}>`)  
        } else{
            document.execCommand(cmd)
        }
    }

    __init__() {
        const richTextEditor = document.querySelector(".richTextEditor")
        const richTextEditor__buttons = richTextEditor.querySelectorAll("button")
        const richTextEditor__output = document.getElementById("richTextEditor__output")

        richTextEditor__output.addEventListener("input", () => {
            console.log("dsffsf")
        })

        richTextEditor__buttons.forEach(button => {
            button.addEventListener("click", () => {
                this.controllAction(button)
            })
        })

        this.setupShortCuts()
    }

    setupShortCuts() {
        window.addEventListener("keydown", (e) => {
        })
    }


}

new RichTextEditor