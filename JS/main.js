var Katalog = document.querySelector('#katalog');
var CategoryContainer = document.querySelector('.category-container');



Katalog.addEventListener("click", function() {
    if (CategoryContainer.style.display != "block") {
        CategoryContainer.style.display = "block";
    } else {
        CategoryContainer.style.display = "none";
    }
})



var RegionList = document.querySelector('.region-list-div');
var Region = document.querySelector('.region');
var Region1i = document.getElementById('regioni1');
var Region2i = document.getElementById('regioni2');




Region.addEventListener("click", function() {
    if (RegionList.style.display != "block") {
        RegionList.style.display = "block";
        Region1i.style.color = "red";
        Region2i.style.transform = "rotate(180deg)";

    } else {
        RegionList.style.display = "none";
        Region1i.style.color = "#b1b5c7";
        Region2i.style.transform = "rotate(0deg)";

    }
});
var StickyHeader = document.getElementById('SHeader');
document.addEventListener('scroll', function(event) {
    console.log(window.scrollY);
    if (window.scrollY > 300) {
        StickyHeader.style.top = "-300px";

    } else {
        StickyHeader.style.top = 0;

    }
});



document.addEventListener('click', clickHander);

function clickHander(event) {
    console.log(event);
    var clickedElementClassList = event.target.classList;
    if (!clickedElementClassList.contains("header-category-span") && !clickedElementClassList.contains("header-category-icon")) {
        document.querySelectorAll('.header-category .melumat').forEach(function(m, index) {
            try {
                m.classList.remove("active");
            } catch (err) {

            }
        });
    }
}

var HeaderCategory = document.querySelectorAll('.header-category');
HeaderCategory.forEach(function(element) {
    element.addEventListener("click", function() {
        var melumat = element.querySelector('.melumat');

        document.querySelectorAll('.header-category .melumat').forEach(function(m, index) {
            try {
                if (m.id != melumat.id) {
                    m.classList.remove("active");
                }

            } catch (err) {

            }
        });


        try {
            if (melumat.classList.contains("active")) {
                melumat.classList.remove("active");
            } else {
                melumat.classList.add("active");
            }

        } catch (err) {
            console.log(err);
        }
    })
});;


// var Katalog = document.querySelector('.katalog');
// var stickyHeaderCat = document.querySelector('.sticky-header-category');

// y.addEventListener("click", function() {
//     if (x.style.display != "block") {
//         x.style.display = "block";

//     } else {
//         x.style.display = "none";
//     }
// })

var kataloq = document.querySelector('.katalog');