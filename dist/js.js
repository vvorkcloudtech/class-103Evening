var btn=document.querySelector("#submit");
        btn.addEventListener("click",function(){
            
   var name = document.forms["formPractice"]["title"].value;
   var UFile = document.forms["formPractice"]["files[]"].value;
   var para = document.forms["formPractice"]["paragraph"].value;
   var date = document.forms["formPractice"]["date"].value;
//    const files = document.querySelector('[type=file]').files;
            var id=1;
   if(name == "" || UFile == "" || para == "" || date == "" || name == null || UFile == null || para == null || date == null){
                alert("Fill All The Fields");
                return false;
            }else{
                var records = localStorage.getItem("records");
                if(records != null ){
                    records = JSON.parse(records);
                    records.sort(function (a, b, c, d) {
                        return a.id - b.id - c.id, d.id;
                    });
                    var id = records[records.length - 1].id + 1;
                }else{
                    var records = new Array();
                }
                
                
                var record = {
                    id:id, 
                    name: name,
                    UFile: UFile,
                }
                records.push(record);
                localStorage.setItem("records", JSON.stringify(records));
                console.log(records); 
                document.forms["formPractice"]["title"].value="";
                document.forms["formPractice"]["file[]"].value="";
                document.forms["formPractice"]["paragraph"].value="";
                document.forms["formPractice"]["date"].value="";
                alert("Record Saved");
            }
        });
		
		
       document.querySelector("#record").addEventListener("click",function(event){
            event.preventDefault();
			document.querySelector(".container").style.opacity="0";
			setTimeout(function(){
            document.querySelector(".result").style.display="block";
            document.querySelector(".container").style.display = "none";
            document.querySelector(".plusBtn").classList.remove("fade");
			},1000);
            var resultDiv=document.querySelector(".listView");
            var records=JSON.parse(localStorage.getItem("records"));
            if(records != null){
                for(let i=0;i<records.length;i++){
                    var list=document.createElement("div");
                    list.classList.add("list");
                    list.id=records[i].id;
                    var leftAlign=document.createElement("div");
                    leftAlign.classList.add("left-align");
                    var h1=document.createElement("h1");
                    h1.appendChild(document.createTextNode(records[i].id));
                    leftAlign.appendChild(h1);
                    list.appendChild(leftAlign);
					
                    var details=document.createElement("div");
                    details.classList.add("left-align");
                    var h1=document.createElement("h4");
                    h1.appendChild(document.createTextNode("Name: "+records[i].name));
                    details.appendChild(h1);
                    var h1 = document.createElement("h4");
                    h1.appendChild(document.createTextNode("Father Name: " + records[i].UFile));
                    details.appendChild(h1);
                    list.appendChild(details);
                    var closeBtn=document.createElement("div");
                    closeBtn.classList.add("close-btn");
                    closeBtn.title="Delete Record";
                    closeBtn.setAttribute("data-id",records[i].id);
                    list.appendChild(closeBtn);
                    if(i===0){
                        console.log(resultDiv.childNodes);
                        //resultDiv.childNodes[0].style.display="none";
                        resultDiv.removeChild(resultDiv.childNodes[0]);
                    }
                    resultDiv.appendChild(list);
                }
   //             try {
                    var delBtns = document.querySelectorAll(".close-btn");
                    //delBtns = Array.from(delBtns);
                    delBtns.forEach(function(btn) {
                        btn.addEventListener("click",function() {
                            let id=btn.getAttribute("data-id");
                            if(confirm("Are You Sure?")){
                                for(let i=0;i<records.length;i++){
                                    if(records[i].id == id){
                                        records.splice(i,1);
                                    }
                                }
                                
                                if (records.length > 0) {
                                    records.sort(function(a,b){
                                        return (a.id-b.id);
                                    });
                                    localStorage.setItem("records",JSON.stringify(records));
                                    let child = document.getElementById(id);
                                    child.parentNode.removeChild(child);
                                }else{
                                    localStorage.removeItem("records");
                    document.querySelector(".listView").innerHTML = "<h1>No Result Found</h1>";
                                }
                                
                            }
                        });
                    });
  //              } catch (error) {
  //              }
            }
        });

        document.querySelector(".plusBtn").addEventListener("click",
		function(event){
        event.preventDefault();
        document.querySelector(".result").style.display = "none";
		document.querySelector(".container").style.display = "block";
		document.querySelector(".container").style.opacity = "0";
        setTimeout(function(){document.querySelector(".container").style.opacity = "1";});
        document.querySelector(".plusBtn").classList.add("fade");
        document.querySelector(".listView").innerHTML="<h1>No Result Found</h1>";
        });
        