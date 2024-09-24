document.getElementById('btn-donation').addEventListener('click',function(){
    console.log('show donation clicked');
    showHistoryById('donation-section')
});

document.getElementById('btn-history').addEventListener('click', function(){
    console.log('show history clicked');
    showHistoryById('history-section');
});