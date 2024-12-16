
        function gerarCNPJ() {
            var n1 = Math.floor(Math.random() * 10);
            var n2 = Math.floor(Math.random() * 10);
            var n3 = Math.floor(Math.random() * 10);
            var n4 = Math.floor(Math.random() * 10);
            var n5 = Math.floor(Math.random() * 10);
            var n6 = Math.floor(Math.random() * 10);
            var n7 = Math.floor(Math.random() * 10);
            var n8 = Math.floor(Math.random() * 10);
            var n9 = 0;
            var n10 = 0;
            var n11 = 0;
            var n12 = 1;
            var digito1 = (n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5) % 11;
            digito1 = digito1 < 2 ? 0 : 11 - digito1;

            var digito2 = (digito1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6) % 11;
            digito2 = digito2 < 2 ? 0 : 11 - digito2;
            var cnpj = '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + '/' + n9 + n10 + n11 + n12 + '-' + digito1 + digito2;
            document.getElementById('cnpj').innerHTML = cnpj;
        }