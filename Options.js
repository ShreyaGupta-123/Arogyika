class Option{
    constructor(){
this.map=createButton("Hospitals");
this.about=createButton("About app");
this.cd=createButton("Common Diseases, Symptoms and Cures");
this.video=createButton("Health videos");

this.greeting=createElement("h1")

    }

    hide(){
        this.map.hide();
        this.about.hide();
        this.cd.hide();
        this.video.hide();
        this.greeting.hide();
    }

    display(){
      this.about.position(displayWidth/4-250,displayHeight/2);
      this.video.position(displayWidth-200,displayHeight/2);
      this.map.position(displayWidth/2-250,displayHeight/2);
      this.cd.position(displayWidth/2-30,displayHeight/2);

      this.greeting.position(displayWidth/30,displayHeight/30);
      this.greeting.html("Welcome "+user.name);

      this.about.mousePressed(()=>{
          state=2
      })

      
      this.map.mousePressed(()=>{
        state=3
      })

      this.video.mousePressed(()=>{
        state=4
      })
  
      this.cd.mousePressed(()=>{
        state=5
      })
    }

    

}