window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(ctx);

    class Particle {
        constructor() {

        }
        draw() {

        }
        update(){

        }
    }

    class Effect {
        constructor(context, canvasWidth, canvasHeight) {
            this.context = context;
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.textX = this.canvasWidth / 2;
            this.textY = this.canvasHeight / 2;
            this.fontSize = 100;
            this.lineHeight = this.fontSize * 0.8;
            this.maxTextWidth = this.canvasWidth * 0.8;
            this.textInput = document.getElementById('textInput');
            this.textInput.addEventListener('keyup', (e) => {
                if (e.key !== ' ') {
                    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                    this.wrapText(e.target.value);
                }
            });
        }
        wrapText(text) {
            const gradient = this.context.createLinearGradient(0, 0, this.canvasWidth, this.canvasHeight);
            gradient.addColorStop(0.3, 'red');
            gradient.addColorStop(0.5, 'blue');
            gradient.addColorStop(0.7, 'yellow');
            this.context.fillStyle= gradient;
            this.context.textAlign='center';
            this.context.textBaseline = 'middle';
            this.context.lineWidth = 3;
            this.context.strokeStyle = 'white';
            this.context.font = this.fontSize + 'px Helvetica';

            // Break text into multiple lines
            let linesArray = [];
            let words = text.split(' ');
            let lineCounter = 0;
            let line = '';
            for (let i = 0; i < words.length; i++) {
                let testLine = line + words[i] + ' ';
                if (this.context.measureText(testLine).width > this.maxTextWidth) {
                    line = words[i] + ' ';
                    lineCounter++;
                } else {
                    line = testLine;
                }
                linesArray[lineCounter] = line;
            }
            let textHeight = this.lineHeight * lineCounter;
            this.textY = this.canvasHeight / 2 - textHeight / 2;
            linesArray.forEach((el, index) => {
                this.context.fillText(el, this.textX, this.textY + (index * this.lineHeight));
                this.context.strokeText(el, this.textX, this.textY + (index * this.lineHeight));
            });
        }
        convertToParticles() {

        }
        render() {

        }
    }

    const effect = new Effect(ctx, canvas.width, canvas.height);
    effect.wrapText('Hello, how are you today?');
    console.log(effect);

    function animate() {

    }

    // // Drawing the axis y
    // ctx.lineWidth = 3;
    // ctx.strokeStyle = 'red';
    // ctx.beginPath();
    // ctx.moveTo(canvas.width/2, 0);
    // ctx.lineTo(canvas.width/2, canvas.height);
    // ctx.stroke();

    // // Drawing the axis x
    // ctx.strokeStyle = 'green';
    // ctx.beginPath();
    // ctx.moveTo(0, canvas.height/2);
    // ctx.lineTo(canvas.width, canvas.height/2);
    // ctx.stroke();
    
    // const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    // gradient.addColorStop(0.3, 'red');
    // gradient.addColorStop(0.5, 'blue');
    // gradient.addColorStop(0.7, 'yellow');
    // ctx.fillStyle= gradient;
    // ctx.strokeStyle = 'cyan';
    // ctx.font = '80px Helvetica';
    // ctx.textAlign='center';
    // ctx.textBaseline = 'middle';

    // const maxTextWidth = canvas.width * 1;
    // const lineHeight = 80;

    // function wrapText(text) {
    //     let linesArray = [];
    //     let lineCounter = 0;
    //     let line = '';
    //     let words = text.split(' ');
    //     for (let i = 0; i < words.length; i++) {
    //         let testLine = line + words[i] + ' ';
    //         if (ctx.measureText(testLine).width > maxTextWidth) {
    //             line = words[i] + ' ';
    //             lineCounter++;
    //         } else {
    //             line = testLine;
    //         }
    //         linesArray[lineCounter] = line;
    //     }
    //     let textHeight = lineHeight * lineCounter;
    //     let textY = canvas.height/2 - textHeight/2;
    //     linesArray.forEach((el, index) => {
    //         ctx.fillText(el, canvas.width/2, textY + (index * lineHeight));
    //     });
    //     console.log(linesArray)
    // }

    // textInput.addEventListener('keyup', function(e) {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     wrapText(e.target.value);
    // });

});