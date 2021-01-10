class About{
    constructor(){
        this.heading1=createElement("h1");
        this.back=createButton("BACK");
        this.content1=createElement("p");
        this.content2=createElement("p");
        this.content3=createElement("p");
        this.content4=createElement("p");
        this.heading2=createElement("h1");
        this.content5=createElement("p");
    }
    display(){
        this.heading1.position(displayWidth/20,displayHeight/20-50);
        this.heading1.html("Why health is important?");

        this.back.position(displayWidth-100,displayHeight/20);

        this.content1.position(displayWidth/20,displayHeight/20+20);
        this.content1.html("It is said that it is health which is real wealth and not pieces of gold and silver. A person with a healthy body and mind will always spread happiness and positivity. We must therefore pay great attention to the need of keeping our body and  soul healthy and happy all the time.");

        this.content2.position(displayWidth/20,displayHeight/20+170);
        this.content2.html("We should always remember that the first requirement of a healthy body is not delicious food but it is instead nutritious food. A balanced diet which includes proteins, carbohydrates, fats and vitamins in requisite proportions is an indispensable need of the body. Milk, fruits, leafy vegetables, citrus fruits etc are good for health.Chips and packed or tinned snacks, though very tasty should never replace regular meals as they do not have adequate nutritional value.");

        this.content3.position(displayWidth/20,displayHeight/2);
        this.content3.html("The second requirement for a healthy body is regular outdoor games or exercise. Exercise helps our bodies to grow strong. It helps our bodies to resist disease spreading pathogens and thus prevent us from falling sick.");

        this.content4.position(displayWidth/20,displayHeight/2+100);
        this.content4.html("The value of good health is well expressed in the proverb- “A sound mind in a sound body”. Thirdly it is only natural for our bodies to tire after work and by the end of the day. Our body requires proper rest in the form of sleep for eight hours a day.");

        this.heading2.position(displayWidth/20,displayHeight/2+220);
        this.heading2.html("About app");

        this.content5.position(displayWidth/20,displayHeight/2+320);
        this.content5.html("The app will provide map facility of all the hospitals nearby your surroundings and information and videos about different types of diseases, symptoms and their treatment.");

        

        this.back.mousePressed(()=>{
            state=1
        })

    }
}