// This really just sets everything up when you first load the page.
window.onload = function(){
  create_settings();
  create_meshes_menu();
  document.querySelector('a-scene').systems['master-controller'].set_inventory_list(inventory_list);
}