
   
    var input = "64630 11735 14216 99233 14470 4978 73429 38120 51135 67060";
    //Enter your code here
    input = input.split(" ");
    var arrayLength = input.length;
    var numbers = input;

    
    var total=0.0;

    for(var i=0;i<numbers.length;i++){
    numbers[i]=parseInt(numbers[i]);
    }

    for(var i=0;i<arrayLength;i++){
        total = total + numbers[i];
    }

    var mean = total/arrayLength;
    var swap;
    
    for (var c = 0 ; c < arrayLength - 1; c++)
    {
        for (var d = 0 ; d < arrayLength - c - 1; d++)
        {
            if (numbers[d] > numbers[d+1]) /* For decreasing order use < */
            {
                swap       = numbers[d];
                numbers[d]   = numbers[d+1];
                numbers[d+1] = swap;
            }
        }
    }
    
  
    if(arrayLength % 2 == 0){
        var median =  (numbers[(arrayLength/2)-1] + numbers[arrayLength/2])/2;
    }else{
        median = numbers[Math.floor(arrayLength/2)]
    }


    //Calculate mode statrted


    counts = {}
    numbers.forEach(function(e) {
    if(counts[e] === undefined) {
        counts[e] = 0
    }
    counts[e] += 1
    })

    console.log(mean);
    console.log(median);
    console.log(counts.value);








