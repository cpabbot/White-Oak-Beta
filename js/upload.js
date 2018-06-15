$(document).ready(function() {
    
    $(".upload-btn").cloudinary_upload_widget({
        cloud_name: 'cpabbot', upload_preset: 'avynotor', multiple: false, cropping: 'server', folder: 'user_photos', button_caption: "Upload", thumnails: '.hidden', stylesheet: 'http://127.0.0.1:59538/css/upload-theme.css' },
    function(error, result) { console.log(error, result) });
    
});