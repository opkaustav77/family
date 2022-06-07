var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","yadu.jpg", "mommy.jpg" , "aai.jpg", "aaja.jpg", "me.jpg"];

var names = ["FAMILY BOOK","SRIKUMAR DASH", "SOMA NANADA", "ARCHITA NANDA", "PRASANTA NANDA","SIRSANSU KAUSTAV DASH"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
