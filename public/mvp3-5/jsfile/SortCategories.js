function SortCategories(CatList){
  CatList.sort(function(a, b){
    return   parseFloat(b.averating) - parseFloat(a.averating)
  });
}
