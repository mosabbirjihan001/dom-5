// 1st - tragedy

document.getElementById('btn-donate')
.addEventListener('click', function(event) {
    event.preventDefault();

    const inputDonation = getInputValueById('input-donation');
    const donatedBalance = getTextValueById('donated-money-1');

    // console.log('Input Donation:', inputDonation, 'Donated Money:', donatedBalance);
    const newBalance = donatedBalance + inputDonation;
    console.log(newBalance);
    document.getElementById('donated-money-1').innerText = newBalance + ' BDT';

    const mainBalance = getTextValueById('account-balance');
    const newMainBalance = mainBalance - inputDonation ;
    console.log(newMainBalance);
    document.getElementById('account-balance').innerText = newMainBalance ;


    // history
    const  p= document.createElement('p');
    p.innerText = `${inputDonation} Taka is Donated for famine-2024 at Feni,Bangladesh.`
    console.log(p);

    // add to history
    document.getElementById('history-section').appendChild(p)
});

// 2nd tragedy

document.getElementById('btn-donate-2')
.addEventListener('click', function(event) {
    event.preventDefault();

    const inputDonation = getInputValueById('input-donation-2');
    const donatedBalance = getTextValueById('donated-money-2');

    // console.log('Input Donation:', inputDonation, 'Donated Money:', donatedBalance);
    const newBalance = donatedBalance + inputDonation;
    console.log(newBalance);
    document.getElementById('donated-money-2').innerText = newBalance + ' BDT';

    const mainBalance = getTextValueById('account-balance');
    const newMainBalance = mainBalance - inputDonation ;
    console.log(newMainBalance);
    document.getElementById('account-balance').innerText = newMainBalance ;

      // history
      const  p= document.createElement('p');
      p.innerText = `${inputDonation} Taka is Donated for Flood Relief in Feni,Bangladesh`
      console.log(p);
  
      // add to history
      document.getElementById('history-section').appendChild(p)
});

// tragedy-3

document.getElementById('btn-donate-3')
.addEventListener('click', function(event) {
    event.preventDefault();

    const inputDonation = getInputValueById('input-donation-3');
    const donatedBalance = getTextValueById('donated-money-3');

    // console.log('Input Donation:', inputDonation, 'Donated Money:', donatedBalance);
    const newBalance = donatedBalance + inputDonation;
    console.log(newBalance);
    document.getElementById('donated-money-3').innerText = newBalance + ' BDT';

    const mainBalance = getTextValueById('account-balance');
    const newMainBalance = mainBalance - inputDonation ;
    console.log(newMainBalance);
    document.getElementById('account-balance').innerText = newMainBalance ;

      // history
      const  p= document.createElement('p');
      p.innerText = `${inputDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh.`
      console.log(p);
  
      // add to history
      document.getElementById('history-section').appendChild(p)
});


// FAQ 
document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href = '/blog.html'
})