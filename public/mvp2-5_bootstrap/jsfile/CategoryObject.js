function CategoryObject(categories,averagerating,list,categoriesID) {
  this.categories = categories;
  this.averating = averagerating;
  this.list = list;
  this.id = categoriesID;
}

function MakeCategoryObject(categories,averagerating,list,categoriesID){
  var tmpCOB = new CategoryObject(categories,averagerating,list,categoriesID);

  return tmpCOB;

}
