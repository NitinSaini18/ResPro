 var border1 = document.getElementById('border1');
            var border2 = document.getElementById('border2');
            var border3 = document.getElementById('border3');
            var border4 = document.getElementById('border4');
            var image = document.getElementById('image');
            var img = document.getElementById('img');
            var palette1 = document.getElementById('palette1');
            var palette2 = document.getElementById('palette2');
            var icon1 = document.querySelector('.icon1');
            var icon2 = document.querySelector('.icon2');

            icon1.addEventListener('click', function () {
                palette1.click();
            });
            // icon2.addEventListener('click', function () {
            //     palette2.click();
            // });
            border1.addEventListener('click', function () {
                image.click();
            });
            let file;
            border1.addEventListener('click', function () {
                image.click();
            });

            border4.addEventListener('click', function () {
                let body = document.body
                let html = document.documentElement
                let height = Math.max(body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight)
                let element = document.querySelector('#page')
                let heightCM = height / 35.35
                html2pdf(element, {

                    // margin: [-1, -3, -3, 0],
                    margin: [-1.5,-5,0,-5],

                    filename: 'MyResume.pdf',
                    image: { type: 'jpeg', quality: 4 },
                    html2canvas: { dpi: 400, letterRendering: true, scale: 3 },
                    jsPDF: {
                        orientation: 'portrait',
                        unit: 'cm',
                        //   format: [heightCM, 50]
                        format: 'a3'

                    }
                }).save()
            })

            // var box = document.getElementById('color');
            // document.getElementById("palette2").addEventListener("change", function () {
            //        box.style.backgroundColor = this.value;
            //     });



            var box = document.getElementById('color');
            let colorpicker = document.getElementById('palette1');
            setInterval(() => {
                let color = colorpicker.value;
                box.style.backgroundColor = color;
            }, 200);

            image.addEventListener("change", function () {
                file = this.files[0];
                showfile();
            });
            function showfile() {
                let filetype = file.type;
                let validextensions = ["image/jpeg", "image/jpg", "image/png"];
                if (validextensions.includes(filetype)) {
                    let fileReader = new FileReader();
                    fileReader.onload = () => {
                        let fileurl = fileReader.result;
                        img.src = fileurl;
                    }
                    fileReader.readAsDataURL(file);
                }
                else {
                    alert("This is not an image file!");
                }
            }
            border2.addEventListener('click', function () {
                img.src = "Images/Template2%20Photo.jpg";
            });

            var changeFontStyle = function (font) {
                document.getElementById(
                    "page").style.fontFamily = font.value;
            }
            var changeFontSize = function (font) {
                document.getElementById(
                    "page").style.fontSize = font.value;
            }

            var changeFontStyleHeader = function (font) {
                for (i = 0; i < 16; i++) {
                    document.getElementsByTagName("H6")[i].style.fontFamily = font.value;
                    document.getElementsByTagName("H4")[i].style.fontFamily = font.value;

                }
            }
            $('input[name="sectionToggle"]').change(function () {
                toggleSection($(this).val(), $(this).is(':checked'));
            });


            function toggleSection(sectionName, toggleState) {
                if (toggleState == true)
                    $('input[value="' + sectionName + '"]').attr('checked', 'true');
                else
                    $('input[value="' + sectionName + '"]').removeAttr('checked');
                $('#' + sectionName).toggle();
            }
             