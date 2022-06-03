function distanceBetweenPoints(x1,y1,x2,y2){
   
    let xAxis =  x1 - x2;
    let yAxis = y1 - y2;

    let result = Math.sqrt(xAxis*xAxis + yAxis*yAxis);

    console.log(result);

}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)