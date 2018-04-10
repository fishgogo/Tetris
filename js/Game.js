(function(){
    var game = window.Game = function(){
        this.init();
        this.block = new Block();
        this.map = new Map();
        this.start();
    }

    Game.prototype.init = function(){
        this.dom = document.createElement('table');
        document.getElementById('app').appendChild(this.dom)
        var tr,td;
        for(var i = 0;i < 20;i++){
            tr = document.createElement('tr');
            this.dom.appendChild(tr);
            for(var j = 0;j < 12;j++){
                td = document.createElement('td');
                tr.appendChild(td);
            }
        }
    }

    Game.prototype.setClass = function(row,col,classname){
        document.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].className = classname;
    }

    Game.prototype.clear = function(){
        for(var i = 0;i < 20;i++){
            for(var j = 0;j < 12;){
                this.setClass(i,j,"");
            }
        }
    }

    Game.prototype.start = function(){
        var self = this;
        setInterval(function(){
            self.block.render();
        },20)
    }

    Game.prototype.bindEvent = function(){
        var self = this;
        document.onkeyup = function(event){
            if (event.keyCode == 37) {
                self.block.left();
            }else if(event.keyCode == 38){
                self.block.rotate();
            }else if(event.keyCode == 39){
                self.block.right();
            }else if(event.keyCode == 38){
                self.block.goDown();
            }
        }
    }
})();