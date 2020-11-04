function Meteor(meteorpic, left, top, vx, vy) {
    this.element = meteorpic;
    this.x = left;
    this.y = top;
    this.dx = vx;
    this.dy = vy;

    var move;
    var that = this;
    this.initm = function() {
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        this.updatePositiveM();
    }

    this.updatePositiveM = function() {
        move = setInterval(frameM, 100);

        function frameM() {
            that.x = that.x + that.dx;
            that.y = that.y + that.dy;
            that.element.style.left = that.x + 'px';
            that.element.style.top = that.y + 'px';
        }
    }
}

// function meteorLeft() {
//     min = Math.ceil(0);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 

// }

function meteorTop() {
    return Math.random() * (0.3 - (-0.2)) - 0.2;
}

function meteorXVel() {
    return Math.random() * (-10 - (-30)) - 30;
}

function meteorLeft() {
    return Math.random() * (200);
}

function meteorYVel() {
    return Math.random() * (18);
}



function callStrike() {
    strikeTime = setTimeout(addMeteors, 30000);

    function addMeteors() {
        clearTimeout(strikeTime);
        meteors.forEach(meteor => {
            // console.log(meteorID);
            meteorData[meteorID] = { top: (meteorTop() * boardHeight), left: meteorLeft() + boardWidth, xvel: meteorXVel(), yvel: meteorYVel() };
            console.log(meteorTop() * boardHeight);
            var meteor1 = new Meteor(meteor, meteorData[meteorID].left, meteorData[meteorID].top, meteorData[meteorID].xvel, meteorData[meteorID].yvel);
            meteor1.initm();
            meteorID++;
        });

    }
}

function strikeWarning() {
    visibleTime = setTimeout(showWarning, 25000);
    hiddenTime = setTimeout(hideWarning, 30000)

    function showWarning() {
        clearTimeout(visibleTime);
        warning.style.visibility = "visible";
        setInterval(function() {
            warning.style.background = "white";
            warning.style.color = "black";
        }, 500)
        setInterval(function() {
            warning.style.background = "#db3b0f";
            warning.style.color = "blanchedalmond";
        }, 1000)

    }

    function hideWarning() {
        clearTimeout(hiddenTime);
        warning.style.visibility = "hidden";
    }

}