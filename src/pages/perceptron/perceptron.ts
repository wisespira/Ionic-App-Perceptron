import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerceptronPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perceptron',
  templateUrl: 'perceptron.html',
})
export class PerceptronPage {

   /**
     * 'plug into' DOM canvas element using @ViewChild
     */
   @ViewChild('canvas') canvasEl : ElementRef;



   /**
     * Reference Canvas object
     */
   private _CANVAS  : any;
   
   


   /**
     * Reference the context for the Canvas element
     */
   private _CONTEXT : any;

  isIdentified: boolean = true; 
    qty:any;
    qty2:any;
   constructor(public navCtrl: NavController)
   {

   }
   



   /**
     * Implement functionality as soon as the template view has loaded
     *
     * @public
     * @method ionViewDidLoad
     * @return {none}
     */
   ionViewDidLoad() : void
   {
      this._CANVAS 		    = this.canvasEl.nativeElement;
      this._CANVAS.width  	= 175;
      this._CANVAS.height 	= 175;

      this.initialiseCanvas();
      this.drawCircle();
   }



   /**
     * Detect if HTML5 Canvas is supported and, if so, configure the
     * canvas element accordingly
     *
     * @public
     * @method initialiseCanvas
     * @return {none}
     */
   initialiseCanvas() : void
   {
      if(this._CANVAS.getContext)
      {
         this.setupCanvas();
      }
   }




   /**
     * Create a circle using canvas drawing API
     *
     * @public
     * @method drawCircle
     * @return {none}
     */
     
     m= 1;
     c= 0;
     
     
     
        
   log(){
      
       this.m = this.qty2;
       this.c = this.qty;
        console.log(this.m);
         console.log(this.c);
         
        
   }
     
 //    drawLineXY() : void
//   {
//   
//      this._CONTEXT.beginPath();
//
//      // x, y, radius, startAngle, endAngle
 //     this._CONTEXT.moveTo(0, this._CANVAS.height);
   //   this._CONTEXT.lineTo(this._CANVAS.width , 0);
      
     // this._CONTEXT.lineWidth   = 1;
     // this._CONTEXT.strokeStyle = '#ffffff';
    //  this._CONTEXT.stroke();
  // }
   
     drawLine() : void
   { 
       
       this.log();
      
      this._CONTEXT.beginPath();
      //if m = 0 there is prob
      let xCord = (this._CANVAS.width-this.c*2.5)/this.m;

    
      // x, y, radius, startAngle, endAngle
      //does this realy work??????
      this._CONTEXT.moveTo(0, this._CANVAS.height-this.c*2.5);
      this._CONTEXT.lineTo(xCord , 0);
      
      this._CONTEXT.lineWidth   = 1;
      this._CONTEXT.strokeStyle = '#ffffff';
      this._CONTEXT.stroke();
   }

   
     
     
     
   drawCircle() : void
   {
       
      this._CONTEXT.beginPath();

      // x, y, radius, startAngle, endAngle
      this._CONTEXT.arc(this._CANVAS.width/2, this._CANVAS.height/2, 80, 0, 2 * Math.PI);
      this._CONTEXT.lineWidth   = 1;
      this._CONTEXT.strokeStyle = '#ffffff';
      this._CONTEXT.stroke();
   }
   
   
    arry = [];
    arryP:Array<point> = [];
   
    
   
   drawCircleRoundPoint(ranX: any, ranY: any,outLine?:string,fill?:string) : void
   {
    
      
        this._CONTEXT.beginPath();
         //this._CONTEXT.moveTo(0, this._CANVAS.height-this.c);
         
         
        
        let x = (this._CANVAS.width*ranX)/100;
        let y = (this._CANVAS.height-(ranY*(this._CANVAS.height/100)));
       this._CONTEXT.arc(x,y, 3, 0, 2 * Math.PI);
   //     this._CONTEXT.fillStyle = '#00FFFF';
//      this._CONTEXT.fill();
        this._CONTEXT.lineWidth   = 1;
      this._CONTEXT.strokeStyle = '#FFFFFF';
      if(outLine){
          this._CONTEXT.strokeStyle = outLine;
      }
      if(fill){
        //   console.log(fill);
          this._CONTEXT.fillStyle = fill;
          this._CONTEXT.fill();
      }
      this._CONTEXT.stroke();
   }
   
   
   
   x = 10;
   
   drawData(): void
       {
       for(let i = 0;i<this.x;i++ ){
          let ranX = Math.floor((Math.random() * 100) + 1)
            let ranY = Math.floor((Math.random() * 100) + 1)
           this.arry.push([ranX, ranY]);
           if(i===0){
                this.drawCircleRoundPoint(ranX , ranY, "#ff0000");
           }else{
                this.drawCircleRoundPoint(ranX , ranY);
           }
           
       }
        console.log(this.arry);
   }




   /**
     * Create a square using canvas drawing API
     *
     * @public
     * @method drawSquare
     * @return {none}
     */
   drawSquare() : void
   {
      this.clearCanvas();
      this._CONTEXT.beginPath();
      this._CONTEXT.rect(this._CANVAS.width/2 - 100, this._CANVAS.height/2 - 100, 200, 200);
      this._CONTEXT.lineWidth   = 1;
      this._CONTEXT.strokeStyle = '#ffffff';
      this._CONTEXT.stroke();
   }
   
   




   /**
     * Create a triangle using canvas drawing API
     *
     * @public
     * @method drawTriangle
     * @return {none}
     */
   drawTriangle() : void
   {
     
      this._CONTEXT.beginPath();
      this._CONTEXT.moveTo(this._CANVAS.width/2 - 100, this._CANVAS.height/2 + 100);
      this._CONTEXT.lineTo(this._CANVAS.width/2 + 100, this._CANVAS.height/2 + 100);
      this._CONTEXT.lineTo(this._CANVAS.width/2, this._CANVAS.height/2);
      this._CONTEXT.lineTo(this._CANVAS.width/2 -100, this._CANVAS.height/2 + 100);
      this._CONTEXT.lineWidth   = 1;
      this._CONTEXT.strokeStyle = '#ffffff';
      this._CONTEXT.stroke();
   }




   /**
     * Configure the Canvas element
     *
     * @public
     * @method setupCanvas
     * @return {none}
     */
   setupCanvas() : void
   {
      this._CONTEXT = this._CANVAS.getContext('2d');
      this._CONTEXT.fillStyle = "#3e3e3e";
      this._CONTEXT.fillRect(0, 0, 500, 500);
        this.addGrid();
   }




   /**
     * Reset the Canvas element/clear previous content
     *
     * @public
     * @method clearCanvas
     * @return {none}
     */
   clearCanvas() : void
   {
       this.arry = [];
      this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
      this.setupCanvas();
        console.clear();
      
   }
   
   addGrid(){
        this._CONTEXT.beginPath();
       for(let i = 1; i<10; i++){
       this._CONTEXT.moveTo((this._CANVAS.width/100)*10*i, this._CANVAS.height);
       this._CONTEXT.lineTo((this._CANVAS.width/100)*10*i, 0); }
       
       for(let c = 1; c<10; c++){
            this._CONTEXT.moveTo( 0 ,this._CANVAS.height-((this._CANVAS.height*10*c)/100) );
       this._CONTEXT.lineTo(this._CANVAS.width, this._CANVAS.height-((this._CANVAS.height*10*c)/100)); 
             }
             
      this._CONTEXT.lineWidth   = 1;
      this._CONTEXT.strokeStyle = '#696969';
      this._CONTEXT.stroke();
       
       
   }
   
   weights = [];
 
   
   pStart(){
      
       for(let i = 0; i < 2; i++){
       let randomNumber = (Math.floor(Math.random() * 201) - 100)/100;
       this.weights[i] = randomNumber;  
        
       }
       console.log(this.weights);
       
  }
   guess(input:any){
      
       let sum= 0;
       for (let i = 0; i <this.weights.length;i++){
           sum += input[i]*this.weights[i]; 
           console.log(" input " + input[i]* + " + " + " weight " + this.weights[i]);
 } 
     
       let output = this.sign(sum);
        
       return output;
  }
  
  
  //activation function
   sign(n: number){
       if(n >= 0){
           return 1;
       }else{
           return -1;
       }
     }
         
   
     
     lr=0.2;
     numOfPoints = 100;
     
     setupP(){
      this.arryP = [];
      this.weights = [];
      this.pStart()   
    
        
    for(let i = 0; i<this.numOfPoints; i++)   {
         this.arryP.push(new point);
    }
    
    for(let i = 0; i<this.numOfPoints; i++){
         let cord = [this.arryP[i].x,this.arryP[i].y];
         //this.train(cord,this.arryP[i].label);
         
        let u = this.guess(cord);
        console.log(i + " " + cord + " the Guess " + u + " Lable " + this.arryP[i].label );
      
        if(u == this.arryP[i].label){
            if(this.arryP[i].label == 1){
                  this.drawCircleRoundPoint(this.arryP[i].x, this.arryP[i].y, '#00FFFF','#FFFFFF');
                  this.arryP[i].found = true;
            }else{
                 this.drawCircleRoundPoint(this.arryP[i].x, this.arryP[i].y, '#00FFFF','#000000');
                 this.arryP[i].found = true;
            }
          
        }else{
             if(this.arryP[i].label == 1){
             this.drawCircleRoundPoint(this.arryP[i].x, this.arryP[i].y, '#FF0000','#FFFFFF');
             this.arryP[i].found = false;
             }else{
            this.drawCircleRoundPoint(this.arryP[i].x, this.arryP[i].y, '#FF0000','#000000');  
            this.arryP[i].found = false;
             }
        }
    // this.drawCircleRoundPoint(this.arryP[i].x, this.arryP[i].y, this.arryP[i].label)
    }
     }
    
    clickTrain(){
          for(let i = 0; i<this.numOfPoints; i++){
         let cord = [this.arryP[i].x,this.arryP[i].y];
         //this.train(cord,this.arryP[i].label);
     
         this.train(cord,this.arryP[i].label);
        let u = this.guess(cord);
     //   console.log(i + " " + cord + " the Guess " + u + " Lable " + this.arryP[i].label );
      
        if(u == this.arryP[i].label){
            if(this.arryP[i].label == 1){
                  this.drawCircleRoundPoint(this.arryP[i].x, this.arryP[i].y, '#00FFFF','#FFFFFF');
                  this.arryP[i].found = true;
            }else{
                 this.drawCircleRoundPoint(this.arryP[i].x, this.arryP[i].y, '#00FFFF','#000000');
                 this.arryP[i].found = true;
            }
          
        }else{
             if(this.arryP[i].label == 1){
             this.drawCircleRoundPoint(this.arryP[i].x, this.arryP[i].y, '#FF0000','#FFFFFF');
             this.arryP[i].found = false;
             }else{
            this.drawCircleRoundPoint(this.arryP[i].x, this.arryP[i].y, '#FF0000','#000000');  
            this.arryP[i].found = false;
             }
        }
        
    }
 }
     
     train(inputs:any, target:any){
         let n = this.guess(inputs);
         let error = target - n;
         //tune weights
         for(let i = 0; i <this.weights.length;i++){
            
             this.weights[i] += error * inputs[i] * this.lr;
         }
         
     }



}

export class point {
     public x:number;
     public y:number;
     public found:boolean; 
      label:number;
      
     constructor(){
         this.x = Math.floor((Math.random() * 100) + 1);
         this.y = Math.floor((Math.random() * 100) + 1) ;
         this.found = false;    
                   
          if(this.x>this.y){
             this.label = 1;
         }else{
             this.label = -1;
         }
     }
     
     toString(){
         
         return "yo yo yo";
     }
     
    
    
}
