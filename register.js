
// function helper(){
//     const decider = $("#reg").text();
//       console.log(decider);

      function addMember2(){
        $(".form-details").append(
          <div class="t2">
              <div class="t2name" id="div">
                <label for="T2" id="form-label">Team Member 2: </label>
                <input type="text" name="t2name"  placeholder=" " />
              </div>
              <div class="t2rno" id="div">
                <label for="rno" id="form-label">Team Member 2 Roll Number:</label>
                <input type="text" name="t2no" />
              </div>
            </div>
        );
      }

      function addMember3(){
        $('.form-details').append(
          <div class="t3">
              <div class="t3name" id="div">
                <label for="T3" id="form-label">Team Member 3: </label>
                <input type="text" name="t2name"  placeholder=" " />
              </div>
              <div class="t3rno" id="div">
                <label for="rno" id="form-label">Team Member 3 Roll Number:</label>
                <input type="text" name="t3no" />
              </div>
            </div>
        );
      }

      function addMember4(){
        $('.form-details').append(
          <div class="t4">
              <div class="t4name" id="div">
                <label for="T4" id="form-label">Team Member 4: </label>
                <input type="text" name="t4name"  placeholder=" " />
              </div>
              <div class="t4rno" id="div">
                <label for="rno" id="form-label">Team Member 4 Roll Number:</label>
                <input type="text" name="t4no" />
              </div>
            </div>
        );
      }
      if(decider==="2"){
        addMember2();
      }
      else if(decider==="4"){
        addMember2();
        addMember3();
        addMember4();
      }
// }

// helper();