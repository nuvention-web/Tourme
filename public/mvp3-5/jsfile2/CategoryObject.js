function CategoryObject(categories,showname,catname,averagerating,list,categoriesID) {
  this.categories = categories;
  this.showname = showname;
  this.catname = catname;
  this.averating = averagerating;
  this.list = list;
  this.id = categoriesID;
}

function MakeCategoryObject(categories,showname,catname,averagerating,list,categoriesID){
  var tmpCOB = new CategoryObject(categories,showname,catname,averagerating,list,categoriesID);

  return tmpCOB;

}
