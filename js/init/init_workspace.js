app.ready( () =>{
    TL.workspace_filelist_autoload_enabled();
    TL.workspace_filelist(0);
    TL.workspace_navbar();
    $('title').attr('i18n', 'title_workspace');
    $('meta[name=description]').attr('i18n', 'des_workspace');
});
app.onExit( () => {
    TL.workspace_filelist_autoload_disabled();
});