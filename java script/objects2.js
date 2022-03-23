let obj = {
    aNum : 123,
    aStr : "Deepak",
    aFun : function(){
        return (this.aNum +" "+ this.aStr)
    }
}

console.log(obj.aFun())