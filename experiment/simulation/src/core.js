 var setValue = [
    [38, 17, 0,20,43],
    [38,17,20,35,0],
    [250,160,190,200,0],
    [45, 16,24,36,0],
    [55, 35,41,56,0],
    ];
 var length=[200,200,1220,200,300];
 var imageArr=["Set1.jpg","Set2.jpg","Set3.jpg","Set4.jpg","Set5.jpg"];
 var total=0;
 var finalAns=0;
 var count=0;
 let x = Math.floor((Math.random() * 5) + 0);
for(var i=0;i<setValue.length;i++){
	if(i==x)
	{
		for(var j=0;j<setValue.length;j++)
		{	
			total+=parseInt(setValue[i][j]);
		//	console.log(" matrix value "+parseInt(setValue[i][j]));
		}
	//	console.log("  "+length[i]);
	//	console.log("  in total "+total);
	}
}

//console.log(" randam value "+x);
//console.log(" total "+total);
var htm='<div class="container-fluid" style="margin-top:20px;">'
		+'<div class="row">'
	        +'<div class="col-sm-6">'
	        	+'<div class="card">'
	        		+'<h5 class="card-header ">Finding RQD(  Rock Quality Designation  )</h5>'
	        			+'<div class="card-body">'
	        				+'<div class="row">'
	        					+'<div class="col-sm-6">'
	        						+'	<div class="form-group">'
	        							for(var i=0;i<setValue.length;i++)
	        							{
	        								if(i==x){
	        									//console.log(" Set [ "+setValue[i]+" ] ");
	        									//console.log("  "+length[i]);
	        									}
	        							}
	 									htm+='  <label for="" ></label>'
	 									+'</div>'
	 							+'</div>'
	 						+'</div>'
	 +'<div class="row">'
	
	 for(var i=0;i<setValue.length;i++)
		{
	 		if(i==x){
	 			
			htm+='<label id="numberSet" style="font-size:20px;color:black;"> Set of core length pieces = [ '+setValue[i] +' ]'
			+'<br><br> Total length of the core run = '+length[i] +'</label>'
	 		}
		}
	 	htm+='<br><label><center id="note" style="font-size:18px;color:red;">Note :- Only taken core length pieces which is greater then and equal to 10CM (>=10)</label></center><br>'
	 	+'<b><label style="font-size:20px;color:green;"> Formula is Given below</label></b>'
	 +'<center><b id="formula" style="font-size:18px;color:red;">RQD= ( sum of core length pieces >= 10cm / total length of core run ) * 100</b></center><br><br>'
	
	 +'</div>'

	 for(var i=0;i<setValue.length;i++)
		{
	 		if(i==x){
	 			//total+=parseInt(setValue[i]);
	 			var finalAns= parseFloat((total/parseInt(length[x]))*100);
	 			var rountofAns=Math.round(finalAns);
			htm+='<center><b id="step2" style="font-size:18px;color:red; display:none;">= Sum of ( '+setValue[i] +' )/'+length[i] + ' * 100'+' </b></center><br>'
			 +'<center><b id="step3" style="font-size:18px;color:red;display:none;">= ('+total+'/'+length[i] +')  * 100 </b></center>'
			 +'<br><center><b id="step4" style="font-size:18px;color:red;display:none;">RQD = '+rountofAns+'% </b></center>'
			 +'<br><center><div id="finalDiv"><button id="smtFinalAnswer" class="btn btn-success">Submit final answer</button>'
			 +'<input type="text"  class="form-control-sm" style="margin-left:50px;display:none;" id="textAns"> </div></center>'
			 +'<br>'
	 		}
		}
//	console.log("final answer "+rountofAns);


htm+='<div class="container" id="geoTable" style="display:none;">'
		+'<table class="table table-bordered table-primary">'
		+'  <thead>'
		+'    <tr>'
		+'     <th>RQD (%)</th>'
		+'      <th>GEOTECHNICAL QUALITY</th>   '  
		+'    </tr>'
		+'  </thead>'
		+'  <tbody>'
		+'   <tr>'
		+'      <td><25</td>'
		+'      <td>VERY POOR</td>'
		+'    </tr>'
		+'   <tr>'
		+'      <td>25<50</td>'
		+'      <td>POOR</td>'
		+'    </tr>'
		+'   <tr>'
		+'      <td>50<75</td>'
		+'      <td>FAIR</td>'
		+'    </tr>'
		+'   <tr>'
		+'      <td>75<90</td>'
		+'      <td>GOOD</td>'
		+'    </tr>'
		+'   <tr>'
		+'      <td>90<100</td>'
		+'      <td>EXCELLECT</td>'
		+'    </tr>'
		+'  </tbody>'
		+'</table>'
+'</div>'

+'</div>'

	+'</div>'

	+'</div>'
	+'<div class="col-sm-6">'
	+'<div class="card">'
		+'<h5 class="card-header h5"> RQD Diagram</h5>'
			+'<div class="card-body">'
				+'<div class="row">'
				for(var i=0;i<setValue.length;i++)
				{
					if(i==x){
					//	console.log("x="+x+" image name"+imageArr[i]);
						
						htm+='<img src="images/'+imageArr[i]+'" style="height: 680px; width: 850px;" class="img-fluid" alt="Responsive image">'
						}
				}
				
				htm+='</div>'
			+'</div>'
	+'</div>'
	+'</div>'
$("#main-div").html(htm);

$("#smtFinalAnswer").click(function(){
	
$("#textAns").show();
});
$("#textAns").change(function(){
	$("#smtFinalAnswer").hide();
	if( parseInt($("#textAns").val())==parseInt(rountofAns))
		{
		$("#geoTable").show();
		$("#finalDiv").html('<div class="alert alert-success" style="font-size:20px;" role="alert">Doing great job. Correct answer ... !!! </div>');
		}
	else
		{
		//$("#finalDiv").html('<div class="alert alert-danger" role="alert"> Wrong answer .... !!! </div>');
		var r = confirm(" Wrong anwser.. try again !!!");
		if (r == true) {
			$("#textAns").val(" ");
		   
		    if(parseInt(count)<2)
		    	{
		    		//$("#smtFinalAnswer").show();
		    		$("#textAns").show();
		    	//	console.log("count"+count);
		    		
		    	}
		    
		    else if(count==1)
		    	{
		    		alert("This is your Last attempt...");
		    	}
		    else if(count==2)
		    	{
		    		$("#step2").show();
		    		$("#step3").show();
		    		$("#step4").show();
		    		$("#smtFinalAnswer").hide();
		    		$("#textAns").hide();
		    		$("#geoTable").show();
		    	//	$("#finalDiv").html('<div class="alert alert-success" style="font-size:20px;" role="alert">Doing great job correct answer .... !!! </div>');
		    	}
		    count++;
		}
		else {
			var r = confirm("Do you want to take another Set of core length ?");
			if(r==true)
			{
				  location.reload();
			}
		}
		}
	
});