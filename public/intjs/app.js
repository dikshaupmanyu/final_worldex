 $('#check').change(function(){
    var checkChange = this.checked ? 'checked' : 'unchecked';
    $('#txt').val(checkChange);
});
