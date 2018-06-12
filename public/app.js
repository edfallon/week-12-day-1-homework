var app = function() {

addCat("bob", "beef", "https://3.bp.blogspot.com/-PWh76bHPAYk/WcK7AYAwCEI/AAAAAAABz5E/kGThGaywUTc80vRLwEULRBAmXgWJe_XpgCLcBGAs/s1600/funny-cat-277-01.jpg")
addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg")
addCat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg")
addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg")

};

var createCatUl = function(){
  var catUl = document.createElement('ul');
  catUl.classList.add('cat');
  return catUl;
};

var createNameLi = function(name){
  var nameLi = document.createElement('li');
  nameLi.textContent = "Name: " + name;
  return nameLi;
};

var createFavoriteFoodLi = function(favoriteFood){
  var favoriteFoodLi = document.createElement('li');
  favoriteFoodLi.textContent = "Favorite Food: " + favoriteFood;
  return favoriteFoodLi;
};

var createImageLi = function(image){
  var imageLi = document.createElement('li');
  imageLi.innerHTML = "<img width=500 src=\"" + image + "\">";
  return imageLi;
};

var appendElements = function(catUl, nameLi, favoriteFoodLi, imageLi, container){
  catUl.appendChild(nameLi);
  catUl.appendChild(favoriteFoodLi);
  catUl.appendChild(imageLi);
  container.appendChild(catUl);
};

var addCat = function(name, favoriteFood, image){
  var catUl = createCatUl();
  var nameLi = createNameLi(name);
  var favoriteFoodLi = createFavoriteFoodLi(favoriteFood);
  var imageLi = createImageLi(image);
  var container = document.querySelector('#cats');

  appendElements(catUl, nameLi, favoriteFoodLi, imageLi, container);
};



window.onload = app;
