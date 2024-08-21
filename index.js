const GAY = [
    "gay",
    "gaY",
    "gAy",
    "gAY",
    "Gay",
    "GaY",
    "GAy",
    "GAY"
]

const Encode = (input) => {
    let out = ""

    for( i in input ){
        const d = input.charCodeAt(i).toString(8);
        if(d.length===3){
            out+="!"
        }
        for( j in d.slice(-2)){
            out+=GAY[d.slice(-2)[j]]
        }
    }
    return out
}

const Decode = (input) => {
    let skip = 0
    let out = ""
    for( i in input ){
        let tmp = ""
        if(!skip){
            let pad = 0
            if(input[i]==="!"){
                pad++
            }else{
                skip--
            }
            const gay = input.substring(i,parseInt(i)+6+pad)

            if(pad){
                tmp+='1'
            }

            tmp += GAY.indexOf(gay.substring(0+pad,3+pad))
            tmp += GAY.indexOf(gay.substring(3+pad,6+pad))
            
            out+=String.fromCharCode(eval(`0o${tmp}`))
            skip+=6
        }else{
            skip--
        }
    }
    return out
}
