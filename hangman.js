let number=Math.floor(Math.random() * 41);
let password=["The pen is mightier than the sword","When in Rome do as the Romans","There is no place like home","Discretion is the greater part of valor","Actions speak louder than words","Talk is cheap show me the code","A friend in need is a friend indeed","Bazinga","Cant guess this one","Chair","Orange","Office","ambidextrous","Shuffle","Animal","jaguar","Hawaii","London","Fulfill","Navigation system ready","Work work","deliberate","nice","kind","good","Checking if the passwords repeat","Show must go on","Jeopardy","Hanged Man","Javascript","Showcase","Money","Puppy","Love","Lust","Faith","Dreams","Dragonborn","Perfect","Pool","Farm"];

let failures=0;
password[number]=password[number].toUpperCase();


let password2="";

for(i=0;i<password[number].length;i++)
{
    if(password[number].charAt(i)==" ")
    {
        password2 = password2 + " ";
    }
    else
    {
        password2 = password2+"-";
    }
}


let print_password=()=>
{
document.getElementById("board").innerHTML=password2;
}



let letters = new Array(26);
letters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


let start=()=>
{
    let div_content="";
    for(i=0;i<26;i++)
    {
        let element="lett"+i;
        div_content= div_content + '<div class="letter" onclick="check('+i+')"id="'+element+'">'+letters[i]+'</div>';
        if((i+1)%7==0)div_content=div_content+'<div style="clear:both;"></div>'
    }
    document.getElementById("alphabet").innerHTML=div_content;

    print_password();
}

window.onload = start;

String.prototype.setchar = function(position, char)
{
if(position>this.length-1)return this.toString();
else return this.substr(0,position)+char+this.substr(position+1);
}

//function check(nr) 
let check=(nr)=>
{
    let hit = false;
    for(i=0;i<password.length;i++)
    {
        if(password[number].charAt(i)==letters[nr])
        {
          password2=password2.setchar(i,letters[nr]);
          hit=true;
        }
    }

    if(hit==true)
    {
        let element="lett"+nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        print_password();
    }
    else
    {
        
        let element="lett"+nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");
// how many failures
        failures++;
        let picture="img/s"+failures+".jpg";
        document.getElementById("gallows").innerHTML='<img src="'+picture+'"alt=""/>';
    }
//win
    if(password[number]==password2)
    {
        document.getElementById("alphabet").innerHTML="Congratulations, You Won! Your passsword was: "+password[number]+'<br/><br/><span class="reset" onclick="location.reload()">Wanna try again?</span>';
    }
//lose
     if(failures>=9)
     {
         document.getElementById("alphabet").innerHTML="You lost this time :( The password was: "+password[number]+'<br/><br/><span class="reset" onclick="location.reload()">Wanna try again?</span>';
     }
}

