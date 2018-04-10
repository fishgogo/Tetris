(function(){
    var block = window.Block = function(){
        this.alltype = ["I","L"][~~(Math.random() * 2)];
        this.typelength = block_json[this.alltype].length;
        this.code = block_json[this.alltype][~~(Math.random() * this.typelength)];
        console.log(this.code);
        this.row = 0;
        this.col = 4;
    }

    Block.prototype.render = function(){
        for(var i = 0;i < 4;i++){
            for(var j = 0;j < 4;j++){
                if (this.code[i][j]!= 0) {
                    game.setClass(this.row+i,this.col+j,this.alltype);
                };
            }
        }
    }

    Block.prototype.Down = function(){
        if (this.check(this.row+1,this.col)) {
            this.row++;
        };
    }

    Block.prototype.check = function(row,col){
        for (var i = 0;i < 4;i++) {
            for(var j = 0;j < 4;j++){
                if (this.code[i][j] != 0 && game.map.code[row+i][col+j] != 0) {
                        return false
                };
            }
        };
        return true;
    }
})();