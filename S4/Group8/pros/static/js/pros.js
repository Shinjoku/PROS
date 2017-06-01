$(document).ready(function(){
    $('#cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('#cep').mask('00000-000');
    $('#insc_estadual').mask('000.000.000.000');
    $('#tel').mask('(00) 0000-0000');
    $('#ramal').mask('0000');
    $('#valor').mask('000.000.000,00', {reverse: true})
    $('input#cel').focusout(function(){
		var phone, element;
		element = $(this);
		element.unmask();
		phone = element.val().replace(/\D/g, '');
		if(phone.length > 10) {
			element.mask("(99) 99999-99999");
		} else {
			element.mask("(99) 9999-99999");
		}
	}).trigger('focusout');

	$('.remove-empresa').click(function(){
	    $('div.modal-body').empty();
	    var id = $(this).data('id')
	    var name = $(this).data('name')
        $('div.modal-body').append('Deseja apagar a empresa: <strong>' + name + '</strong>?');
        $('a.btn-yes').attr('href', 'delete_empresa/' + id + '/');
    });

	$('.remove-client').click(function(){
	    $('div.modal-body').empty();
	    var id = $(this).data('id')
	    var name = $(this).data('name')
        $('div.modal-body').append('Deseja apagar o cliente: <strong>' + name + '</strong>?');
        $('a.btn-yes').attr('href', 'delete_cliente/' + id + '/');
    });
});

