class Login{
    constructor(){
        this.username=createInput("Username");
        this.login=createButton("Login");
    }

    hide(){
        this.login.hide();
        this.username.hide();
    }

    display(){
        this.username.position(displayWidth/2-100,displayHeight/2);
        this.login.position(displayWidth/2-40,displayHeight/2+70);

        this.login.mousePressed(()=>{
            this.login.hide();
            this.username.hide();
            user=new User();
            user.name=this.username.value();
            user.update(this.name);
            logo.visible=false;
            stethoscope.visible=false;
            plus.visible=false;
            injection.visible=false;
            syrup.visible=false;
            state=1;
        });

    }
}