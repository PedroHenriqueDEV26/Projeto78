var images =
["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.semprefamilia.com.br%2Feducacao-dos-filhos%2F4-presentes-que-o-pai-precisa-dar-ao-filho%2F&psig=AOvVaw2l1g0iWvq8UebMldwNZIO6&ust=1682807594578000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCMD05YLRzf4CFQAAAAAdAAAAABAD",
 "https://blog-leiturinha-novo.s3.us-east-1.amazonaws.com/production/uploads/2019/05/iStock-1213017789-1.jpg", 
 "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbc.com%2Fportuguese%2Fgeral-50906016&psig=AOvVaw25pjshXRWTkxm3GAq4THe2&ust=1682808296790000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOCAqp3Uzf4CFQAAAAAdAAAAABAD"];

 var names = 
 ["Pai", "Mãe", "Filhos"];

var i=0;
function update()
{
    i++;
    var numbersOffFamilyMemberInArray = 5;
    if( i >numbersOffFamilyMemberInArray ) 

    {
        i=0;
    }

    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("familyImage").src = updatedImage;
    document.getElementById("familyName").innerHTML = updatedName

}