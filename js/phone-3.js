const loadPhones = (searchText) =>{
    const url= `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        // console.log(data.data)
        // call displayLoadPhones
        displayLoadPhones(data.data)

    })
};

const displayLoadPhones = (datas)=>{
//   step-1
const parent= document.getElementById('phone-container')
parent.innerHTML ='';
// // display 3 phones
// datas= datas.slice(0, 3);
/*____________ show all btn section start ________________*/ 
const showAll= document.getElementById('show-all')
if(datas.length > 10){
    datas= datas.slice(0, 3);
    showAll.classList.remove('d-none')
}
else{
    showAll.classList.add('d-none')
}
/*____________ show all btn section start ________________*/ 
/*______________ No phone section start _________________*/ 
const noPhone= document.getElementById('no-phone-message')
if(datas.length === 0){
    noPhone.classList.remove('d-none')
}
else{
    noPhone.classList.add('d-none')
}
/*______________ No phone section end ___________________*/ 

// display all phones
    datas.forEach (singleData=>{
        console.log(singleData.phone_name)

        // step-2
        const phoneDiv= document.createElement('div')
        phoneDiv.classList.add('col')
        phoneDiv.innerHTML=`
        <div class="card h-100 p-4">
        <img src="${singleData.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Model:${singleData.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
        </div>
    </div>
        `;
        // step-3
        parent.appendChild(phoneDiv)
    })
    // stop loader-spinner
    toggleSpiner(false);
};

//click btn-search and phone search part
document.getElementById('btn-search').addEventListener('click', function(){
// start loader-spinner
toggleSpiner(true);

    const searchField= document.getElementById('search-field');
const searchText= searchField.value;
// call loadPhones()
loadPhones(searchText)
});

/*_____________________ loader-spinner section start _____________________*/ 
const toggleSpiner = isLoading =>{
    const loaderSpinner= document.getElementById('loader-spinner')
    if(isLoading){
        loaderSpinner.classList.remove('d-none')
    }
    else{
        loaderSpinner.classList.add('d-none')
    }
}
/*_____________________ loader-spinner section start _____________________*/ 


// call function
// loadPhones('iphone')