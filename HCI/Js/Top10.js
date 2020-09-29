
//Ref
//https://www.officialcharts.com/charts/asian-download-chart/
Start();
function Start(){
    var html='';
    var Images = [
        {
            Song : 'SKECHERS',
            Artist : 'DRIPREPORT',
            Location : './Images/Top10/Top1.jpg'
        },
        {
            Song : 'EARLY',
            Artist : 'JOY CROOKES FT JAFARIS',
            Location : './Images/Top10/Top2.jpg'
        },
        {
            Song : 'PTOLA',
            Artist : 'MICKEY SINGH FT PAM SENGH',
            Location : './Images/Top10/Top3.jpg'
        }
        ,
        {
            Song : 'TUM HI AANA',
            Artist : 'PAYAL DEV & JUBIN NAUTIYAL',
            Location : './Images/Top10/Top4.jpg'
        },
        {
            Song : 'JANNAT (FROM SUFNA)',
            Artist : 'B PRAAK',
            Location : './Images/Top10/Top5.jpg'
        },
        {
            Song : 'SHAYAD',
            Artist : 'ARIJIT SINGH/PRITAM',
            Location : './Images/Top10/Top6.jpg'
        },
        {
            Song : 'TU HI DAS DE',
            Artist : 'PAGG/PANAG/SINGH',
            Location : './Images/Top10/Top7.jpg'
        },
        {
            Song : 'PANJEBA',
            Artist : 'JASMINE SANDLAS & MANNI SANDHU',
            Location : './Images/Top10/Top8.jpg'
        },
        {
            Song : 'QUBOOL A',
            Artist : 'HASHMAT SULTANA',
            Location : './Images/Top10/Top9.jpg'
        },
        {
            Song : 'SAHIBA',
            Artist : 'INTENSE FT SIMIRAN KAUR DHADLI',
            Location    : './Images/Top10/Top10.jpg'
        }
    ]
    for(var i=0;i<Images.length;i++){
        html = html+'<h3 class="textCenter">'+'Top '+(i+1)+'</h3>';
        html = html+'<img src="' + Images[i].Location+ '"class="center imgTop10">';
        html = html+'<p class="textCenter" style="font-weight: bold;">';
        html = html+'Song : '+Images[i].Song;
        html = html+'<br>';
        html = html+'Artist : '+Images[i].Artist;+'</p>';
    }
    $('#Top10').html(html);
}