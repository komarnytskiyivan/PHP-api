<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"></meta>
<title>My api</title>
<link rel="stylesheet" href = "style.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
</head>
<body>
   <div class = "header"> <div class = "title container-title"> <h1>Pokedex</h1> </div></div>
   <div class="container mt-5">
      <div class="row post-list content">
      </div>
      <div id="loadMore" class="btn btn-primary btn-block">
      Load More
      </div>
   </div>
   <div class="row post-list info sidebar">
         <div class="card info-card" style='width: 18rem;'>
            <div class="card-body">
            <img class="card-img card-info-img" src=""></img>
            <h5 class="card-title card-info-title"></h5>
            <p class="card-text">
               <table class="table-inform" border="1">
                  <tr>
                     <th>Type</th>
                     <th class="types"></th>
                  </tr>
                  <tr>
                     <td>Attack</td>
                     <td class="attack"></td>
                  </tr>
                  <tr>
                     <td>Defense</td>
                     <td class="defense"></td>
                  </tr>
                  <tr>
                     <td>HP</td>
                     <td class="hp"></td>
                  </tr>
                  <tr>
                     <td>SP Attack</td>
                     <td class="spattack"></td>
                  </tr>
                  <tr>
                     <td>SP Defence</td>
                     <td class="spdefense"></td>
                  </tr>
                  <tr>
                     <td>Speed</td>
                     <td class="speed"></td>
                  </tr>
                  <tr>
                     <td>Weight</td>
                     <td class="weight"></td>
                  </tr>
                  <tr>
                     <td>Total moves</td>
                     <td class="totalmoves"></td>
                  </tr>
               </table></p>
            </div>
         </div>
      </div>
   <script async src="./main.js"></script>
</body>
</html>