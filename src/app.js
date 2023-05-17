console.log("1.JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. ")

function findPrime(...numbers){
    for(let i=0;i<numbers.length;i++){
        
        if(numbers[i]==1 & numbers[i]==0){
            console.log(numbers[i]+ " Asal Değildir")
        }

        let sayac=0
        for(let j=2;j<numbers[i];j++){
            if(numbers[i]%j==0){
                sayac++
            }
        }
        if(sayac==0){
            console.log(numbers[i]+ " Asal sayıdır")
        }else{
            console.log(numbers[i]+" Asal sayı değildir")
        }
    }
}

findPrime(3,16,41)

console.log("\nParametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.")
function arkadasSayi(sayi1,sayi2){
    let total1=0;
    let total2=0;
    for(let i=0;i<sayi1;i++){
        if(sayi1%i==0){
            total1=total1+i
        }
    }
    for(let j=0;j<sayi2;j++){
        if(sayi2%j==0){
            total2=total2+j
        }
    }

    if(sayi1==total2 && sayi2==total1){
        console.log(sayi1 + "ve "+sayi2+" arkadaş sayidir")
    }else{
        console.log(sayi1 + "ve "+sayi2+" arkadaş sayi degildir")
    }

}
arkadasSayi(1184,1210)

console.log("\n1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.")
function mukemmmelSayi(){
    for(let i=0;i<1000;i++){
        let total=0
        for(let j=0;j<i;j++){
            if(i%j==0){
                total=total+j
            }
        }
        if(total==i){
            console.log(i+ " Mükkemmel sayidir")
        }
    }

    
}
mukemmmelSayi()

console.log("\n1000'e kadarki tüm asal sayıları listeleyen programı yazınız.")
function prime(){
    console.log("2 Asal sayi")
    for(let i=3; i<1000;i++){
        let sayac=0
        for(let j=2;j<i;j++){
            if(i%j==0){
                sayac=1
                break
            }
        }
        if(sayac==0){
            console.log(i+ " Asal sayi")
        }       
    }
}
prime()