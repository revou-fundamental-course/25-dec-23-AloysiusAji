        function hitungLuas() {
            const alas = document.getElementById('alas').value;
            const tinggi = document.getElementById('tinggi').value;
            const luas = 0.5 * alas * tinggi;
            document.getElementById('hasilLuas').innerHTML = 
            'L = 1/2 x a x t <br> '+
            'L = 1/2 x ' + alas +' x '+ tinggi + ' <br>'+
            ' L = ' + luas;
        }

        function resetLuas() {
            document.getElementById('alas').value = '';
            document.getElementById('tinggi').value = '';
            document.getElementById('hasilLuas').innerHTML = '';
        }

        function hitungKeliling() {
            let sisiA = parseFloat(document.getElementById('sisiA').value);
            let sisiB = parseFloat(document.getElementById('sisiB').value);
            let sisiC = parseFloat(document.getElementById('sisiC').value);
            let keliling = sisiA + sisiB + sisiC;

            document.getElementById('hasilKeliling').innerHTML =
            'K = S1 + S2 +S3 <br> '+
            'K = '+ sisiA + ' + ' + sisiB +' + '+ sisiC + ' <br>'+ 
            'K = ' + keliling;
        }

        function resetKeliling() {
            document.getElementById('sisiA').value = '';
            document.getElementById('sisiB').value = '';
            document.getElementById('sisiC').value = '';
            document.getElementById('hasilKeliling').innerHTML = '';
        }