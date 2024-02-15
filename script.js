function mincost(arr)
{ 
	let totalCost = 0;
	arr.sort((a,b)=>a-b);
	for(let i=1;i<arr.length;i++){
		let combinedLength = arr[i-1]+arr[i];
		totalCost += combinedLength;
		arr[i] = combinedLength;
		arr.sort((a,b)=>a-b);
	}
	return totalCost;
  
}

module.exports=mincost;
