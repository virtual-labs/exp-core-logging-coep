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
htm='<div class="row">'
				for(var i=0;i<setValue.length;i++)
				{
					if(i==x){
					//	console.log("x="+x+" image name"+imageArr[i]);
						
						htm+='<img src="images/'+imageArr[i]+'" style="height: 680px; width: 850px;" class="img-fluid" alt="Responsive image">'
						}
				}
				
				htm+='</div>'
$("#content_div1").html(htm);
htm='<span>'
+'<center   class="blink">Note :- Only taken core length pieces which is greater then and equal to 10CM (>=10)</center></span>'


 for(var i=0;i<setValue.length;i++)
		{
	 		if(i==x){
	 			
			htm+='<br><center><span class="question"> Set of core length pieces = [ '+setValue[i] +' ]'
			+' And Total length of the core run = '+length[i] +'</span></center>'
	 		}
		}
	htm+='<div class="card" style="margin:20px;" id="CalculateActualFlow">'
		+'<div class="card-header">'
		+'<center><label style="font-size:20px;color:#fff;">Calculate RQD</label></center>'
		+' </div>'
		+'<div class="card-body">'
		+'	<h5 class="card-title"></h5>'
		+'	<p class="card-text" >'
		 + '<div class="row"   >'
	         +'<div class="col-sm-5">'
	         +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;font-size:20px"><b>Enter calculate Answer of RQD: </b></label>'
	         +'</div>'
	         +'<div class="col-sm-3">'
	         +'<input type="text" id="ans" value="" style=margin:15px 10px;width:100%;"  class=" form-control" />'
	         +'</div>'
	         +'<div class="col-sm-4">'
	         +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#myModal" >Submit</button>'
	         +'</div>'
	     +'</div>'
		+'</p>'
		
		+'</div>'
		+'</div>'
		+'	<div class="modal" id="myModal">'
		 +' <div class="modal-dialog">'
		+'	<div class="modal-content">'

			  <!-- Modal Header -->
		+'	  <div class="modal-header" style="background-color:rgba(78,109,114,1);color:#fff;">'
		+'		<h4 class="modal-title">Message Box</h4>'
		+'		<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	  </div>'

			  <!-- Modal body -->'
		+'	  <div class="modal-body" id="modelBody">'
		+'		Modal body..'
		+'	  </div>'

			  <!-- Modal footer -->
		+'	  <div class="modal-footer">'
		+'		<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
		+'	  </div>'

		+'	</div>'
		 +' </div>'
		+'</div>'

$("#content_div2").html(htm);
  var id=0;
  var total=0;
  for(var i=0;i<setValue.length;i++){
	if(i==x)
	{
		for(var j=0;j<setValue.length;j++)
		{	
			total+=parseInt(setValue[i][j]);
		
		}
	}
	}
	  $('#btnAnsCheck').click(function(){
		  
	
	var finalAns= parseFloat((total/parseInt(length[x]))*100);
	 			var rountofAns=Math.round(finalAns);
		 
	console.log("final answer "+rountofAns);
		  flow = $("#ans").val();
		  if(flow==""){

			$("#modelBody").html("<b >Enter numeric value.</b> ");
			
		}
		else
			{
				if (id <= 3) {
					if (rountofAns == flow) {
						//$("#ans").val("");
						
						id=0;
						 $("#modelBody").css("color", "blue");
						$("#modelBody").html("<b class='boldTextblue'>Correct Answer Now See The Below Table .</b>");
						tableCreation();
				
					} else if (rountofAns != flow) {
						 $("#modelBody").css("color", "red");
//					alert("Entered value is incorrect.Try it again... ");
					$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again...</b>");
					
					}


				} else if (id == 4) {
					 $("#modelBody").css("color", "blue");
					
					$("#modelBody").html("Formula : RQD= ( sum of core length pieces >= 10cm / total length of core run ) * 100");
					
					
				} else {
					flow = $("#ans").val();

					if (rountofAns == flow) {
						
						//$("#ans").val("");
						
						id=0;
						 $("#modelBody").css("color", "blue");
						$("#modelBody").html("<b class='boldTextblue'>Your Answer is Correct. Now refer the below table .</b>");
						tableCreation();
					} else {

						 $("#modelBody").css("color", "green");
						$("#modelBody").html("<b class='boldTextblue'>Correct Answer is " + rountofAns+'</b>');
					}
				}
				id++;
	
			} 
	  });

function tableCreation()
{
	
	//#("ans").html();
	$("#ans,#btnAnsCheck").prop("disabled",true);
	var htm='<div class="container" id="geoTable">'
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
$("#tableDiv").html(htm);

	
}