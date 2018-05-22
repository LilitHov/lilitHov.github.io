// get myForm
// var form = document.forms.myForm;
// // console.log(form.elements.length)//2 this is a length of our form
// for (var i = 0; i < form.elements.length; i++) {
//     form.elements[i].oninput = function () {
//     // in this case 'this' is a country or  a city
//         if(this.name === 'country') {
//             // console.log(this.selectedIndex);
//             this.nextElementSibling.selectedIndex = this.selectedIndex;
// // this.selectedIndex- yntrvac optioni indexy -0.1.2......
// // nextElementSibling in this case it is a 'city '
//         } else if (this.name === 'city') {
//             this.previousElementSibling.selectedIndex = this.selectedIndex;
// // previousElementSibling in this case it is a 'country'
//         }
//     }
// }


// jQuery

var select = $("select");
// console.log(select);
$(select).on('change',function () {
    // console.log($(this).option.value);
    // console.log($(this).val())
    $(select).val($(this).val());
});


