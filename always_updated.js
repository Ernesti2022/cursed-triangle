javascript:
function kekw()
    {
        let x = fetch("https://raw.githubusercontent.com/Ernesti2022/cursed-triangle/main/triangleCode.js")
        .then( (e) => {return e.text()})
        .then( (e) => {return e.slice(11)})
        .then( (e) => { eval(e); });

        return "ez";
    }; 
console.log(kekw())