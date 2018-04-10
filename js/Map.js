(function(){
    var map = window.Map = function(){
        this.code = (function(){
            var arr = [];
            for(var i  = 0;i < 20;i++){
                arr.push([])
                for(var j = 0;j < 12;j++){
                    arr[i].push(0)
                }
            }
            arr.push(Array(12).fill("X"))
            return arr;
        })();
        console.log(this.code)
    }
})();