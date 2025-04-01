const arr = [4,3,2,2,4,1,3,4,3];

let freq = [];

for (let i = 0; i < arr.length; i++) {
    let num = (arr[i])-1;

    if(!freq[num])
        freq[num] = 0;

    freq[num]++;
}

console.log(freq);

let lucky;

for (let i = 0; i < freq.length; i++) {
    
    if(freq[i] === freq[i+1])[
        lucky = freq[i]
    ]
    
}

console.log(lucky);
