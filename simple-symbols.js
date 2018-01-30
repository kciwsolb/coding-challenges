function SimpleSymbols(str) { 
    var symbols = str.split("");
    var segment = [symbols[0], symbols[1], symbols[2]];
    for(var i = 0; i < symbols.length; i++) {
        if(/[a-zA-Z]/.test(segment[1])) {
            if(segment[0] != "+" || segment[2] != "+") {
                return "false";
            }
        }
        segment.shift();
        segment.push(symbols[i]);
    }
    return "true"; 
}
SimpleSymbols(readline());